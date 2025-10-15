/**
 * GitHub API integration for syncing tokens
 */

import type { TokenData, GitHubConfig } from '../../types/tokens';

export async function syncToGitHub(tokens: TokenData, config: GitHubConfig): Promise<{ success: boolean; commitUrl?: string; error?: string }> {
  try {
    // Get current file SHA (required for updates)
    let sha: string | undefined;
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
    const content = Buffer.from(JSON.stringify(tokens, null, 2)).toString('base64');
    
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
          content,
          sha, // Include for updates
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
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}
