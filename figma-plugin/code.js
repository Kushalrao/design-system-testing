/**
 * Figma Plugin Main Code
 * Handles variable extraction and GitHub sync
 */

// Show the plugin UI
figma.showUI(__html__, { width: 300, height: 400 });

// Extract variables from Figma
async function extractVariables() {
  try {
    const collections = await figma.variables.getLocalVariableCollections();
    const tokens = {
      collections: {},
      metadata: {
        version: '1.0.0',
        generatedAt: new Date().toISOString(),
        figmaFile: figma.fileKey || 'unknown',
      },
    };

    for (const collection of collections) {
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
    // Get current file SHA (required for updates)
    let sha;
    try {
      const response = await fetch(
        `https://api.github.com/repos/${config.owner}/${config.repo}/contents/tokens.json`,
        {
          headers: {
            'Authorization': `token ${config.token}`,
            'Accept': 'application/vnd.github.v3+json',
          },
        }
      );
      
      if (response.ok) {
        const data = await response.json();
        sha = data.sha;
      }
    } catch (error) {
      // File doesn't exist yet, that's ok
    }

    // Create/update tokens.json
    const content = btoa(JSON.stringify(tokens, null, 2));
    
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
      return { success: false, error };
    }

    const commitData = await commitResponse.json();
    
    return {
      success: true,
      commitUrl: commitData.commit.html_url,
    };
  } catch (error) {
    return {
      success: false,
      error: error.message || 'Unknown error',
    };
  }
}

// Handle messages from the UI
figma.ui.onmessage = async (msg) => {
  if (msg.type === 'extract-variables') {
    try {
      const tokens = await extractVariables();
      figma.ui.postMessage({
        type: 'variables-extracted',
        tokens,
      });
    } catch (error) {
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
