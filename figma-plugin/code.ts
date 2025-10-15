/**
 * Figma Plugin Main Code
 * Handles variable extraction and GitHub sync
 */

import { extractVariables } from './src/plugin/extractors/variables';
import { syncToGitHub } from './src/plugin/exporters/github';
import type { GitHubConfig } from './src/types/tokens';

// Show the plugin UI
figma.showUI(__html__, { width: 300, height: 400 });

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
        error: error instanceof Error ? error.message : 'Failed to extract variables',
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
        error: error instanceof Error ? error.message : 'Failed to sync to GitHub',
      });
    }
  }

  if (msg.type === 'close') {
    figma.closePlugin();
  }
};
