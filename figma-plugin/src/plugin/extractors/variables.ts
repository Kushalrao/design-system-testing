/**
 * Extract Figma Variables using Variables API
 */

import type { FigmaVariable, FigmaVariableCollection, TokenData } from '../../types/tokens';

export async function extractVariables(): Promise<TokenData> {
  const collections = await figma.variables.getLocalVariableCollections();
  const tokens: TokenData = {
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
    ).filter(Boolean) as FigmaVariable[];

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
}

function mapVariableTypeToTokenType(figmaType: string): 'color' | 'spacing' | 'typography' | 'radius' | 'shadow' {
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
