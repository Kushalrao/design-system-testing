/**
 * TypeScript types for design tokens
 */

export interface FigmaVariable {
  id: string;
  name: string;
  resolvedType: 'COLOR' | 'FLOAT' | 'STRING' | 'BOOLEAN';
  valuesByMode: Record<string, any>;
  scopes: string[];
  description?: string;
}

export interface FigmaVariableCollection {
  id: string;
  name: string;
  modes: Array<{
    modeId: string;
    name: string;
  }>;
  variableIds: string[];
}

export interface DesignToken {
  name: string;
  type: 'color' | 'spacing' | 'typography' | 'radius' | 'shadow';
  value: any;
  description?: string;
}

export interface TokenCollection {
  name: string;
  tokens: DesignToken[];
}

export interface TokenData {
  collections: Record<string, TokenCollection>;
  metadata: {
    version: string;
    generatedAt: string;
    figmaFile: string;
  };
}

export interface GitHubConfig {
  token: string;
  owner: string;
  repo: string;
  branch: string;
  createPR: boolean;
}
