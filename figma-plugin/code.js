/**
 * Figma Plugin Main Code
 * Handles variable extraction and GitHub sync
 */

// Show the plugin UI
figma.showUI(__html__, { width: 300, height: 400 });

// Extract variables from Figma
async function extractVariables() {
  try {
    console.log('Starting variable extraction...');
    const collections = await figma.variables.getLocalVariableCollections();
    console.log('Found collections:', collections.length);
    
    const tokens = {
      collections: {},
      metadata: {
        version: '1.0.0',
        generatedAt: new Date().toISOString(),
        figmaFile: figma.fileKey || 'unknown',
      },
    };

    for (const collection of collections) {
      console.log('Processing collection:', collection.name);
      const variables = collection.variableIds.map(id => 
        figma.variables.getVariableById(id)
      ).filter(Boolean);

      tokens.collections[collection.name] = {
        name: collection.name,
        tokens: variables.map(variable => ({
          name: variable.name,
          type: mapVariableTypeToTokenType(variable.resolvedType),
          value: variable.valuesByMode,
          description: variable.description,
        })),
      };
    }

    console.log('Extracted tokens:', tokens);
    return tokens;
  } catch (error) {
    console.error('Error extracting variables:', error);
    throw new Error('Failed to extract variables: ' + error.message);
  }
}

function mapVariableTypeToTokenType(figmaType) {
  switch (figmaType) {
    case 'COLOR':
      return 'color';
    case 'FLOAT':
      return 'spacing';
    case 'STRING':
      return 'typography';
    default:
      return 'spacing';
  }
}

// Sync to GitHub
async function syncToGitHub(tokens, config) {
  try {
    console.log('Starting GitHub sync...');
    console.log('Config:', config);
    console.log('Tokens:', tokens);
    
    // Get current file SHA (required for updates)
    let sha;
    try {
      console.log('Checking for existing file...');
      const response = await fetch(
        `https://api.github.com/repos/${config.owner}/${config.repo}/contents/tokens.json`,
        {
          headers: {
            'Authorization': `token ${config.token}`,
            'Accept': 'application/vnd.github.v3+json',
          },
        }
      );
      
      console.log('Response status:', response.status);
      
      if (response.ok) {
        const data = await response.json();
        sha = data.sha;
        console.log('Found existing file, SHA:', sha);
      } else {
        console.log('File does not exist, will create new one');
      }
    } catch (error) {
      console.log('Error checking existing file:', error);
    }

    // Create/update tokens.json
    console.log('Creating base64 content...');
    const jsonString = JSON.stringify(tokens, null, 2);
    console.log('JSON string length:', jsonString.length);
    
    let content;
    try {
      // Custom base64 encoding function
      function base64Encode(str) {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
        let result = '';
        let i = 0;
        
        while (i < str.length) {
          const a = str.charCodeAt(i++);
          const b = i < str.length ? str.charCodeAt(i++) : 0;
          const c = i < str.length ? str.charCodeAt(i++) : 0;
          
          const bitmap = (a << 16) | (b << 8) | c;
          
          result += chars.charAt((bitmap >> 18) & 63);
          result += chars.charAt((bitmap >> 12) & 63);
          result += i - 2 < str.length ? chars.charAt((bitmap >> 6) & 63) : '=';
          result += i - 1 < str.length ? chars.charAt(bitmap & 63) : '=';
        }
        
        return result;
      }
      
      content = base64Encode(jsonString);
      console.log('Base64 content created, length:', content.length);
    } catch (error) {
      console.error('Error creating base64:', error);
      throw new Error('Failed to encode content: ' + error.message);
    }
    
    const commitResponse = await fetch(
      `https://api.github.com/repos/${config.owner}/${config.repo}/contents/tokens.json`,
      {
        method: 'PUT',
        headers: {
          'Authorization': `token ${config.token}`,
          'Accept': 'application/vnd.github.v3+json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: '🎨 Update design tokens from Figma\n\nAuto-synced via Figma plugin',
          content: content,
          sha: sha, // Include for updates
          branch: config.branch,
        }),
      }
    );

    if (!commitResponse.ok) {
      const error = await commitResponse.text();
      console.error('GitHub API error:', error);
      return { success: false, error };
    }

    const commitData = await commitResponse.json();
    console.log('Successfully synced to GitHub:', commitData.commit.html_url);
    
    return {
      success: true,
      commitUrl: commitData.commit.html_url,
    };
  } catch (error) {
    console.error('Sync error:', error);
    return {
      success: false,
      error: error.message || 'Unknown error',
    };
  }
}

// Handle messages from the UI
figma.ui.onmessage = async (msg) => {
  console.log('Received message:', msg.type);
  
  if (msg.type === 'extract-variables') {
    try {
      const tokens = await extractVariables();
      figma.ui.postMessage({
        type: 'variables-extracted',
        tokens,
      });
    } catch (error) {
      console.error('Extraction error:', error);
      figma.ui.postMessage({
        type: 'error',
        error: error.message || 'Failed to extract variables',
      });
    }
  }

  if (msg.type === 'sync-to-github') {
    try {
      const { tokens, config } = msg;
      const result = await syncToGitHub(tokens, config);
      
      figma.ui.postMessage({
        type: 'sync-complete',
        result,
      });
    } catch (error) {
      console.error('Sync error:', error);
      figma.ui.postMessage({
        type: 'error',
        error: error.message || 'Failed to sync to GitHub',
      });
    }
  }

  if (msg.type === 'close') {
    figma.closePlugin();
  }
};