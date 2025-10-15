/**
 * Theme Configuration
 * Combines design tokens for consistent styling
 */

import { colors, spacing, typography, radius, shadows, getColor, getSpacing, getRadius } from '../tokens';

// Get the first available mode ID from tokens
const firstColor = Object.values(colors)[0];
const defaultModeId = firstColor ? Object.keys(firstColor)[0] : '1396:1';

export const theme = {
  colors,
  spacing,
  typography,
  radius,
  shadows,
  
  // Common component styles using tokens
  components: {
    button: {
      primary: {
        backgroundColor: getColor('primary-800', defaultModeId),
        color: getColor('ss-foreground', defaultModeId),
        borderRadius: getRadius('corner-radius-2'),
        paddingVertical: getSpacing('spacing-m'),
        paddingHorizontal: getSpacing('spacing-l'),
        ...shadows.md,
      },
      secondary: {
        backgroundColor: getColor('primary-600', defaultModeId),
        color: getColor('ss-foreground', defaultModeId),
        borderRadius: getRadius('corner-radius-2'),
        paddingVertical: getSpacing('spacing-m'),
        paddingHorizontal: getSpacing('spacing-l'),
        ...shadows.md,
      },
    },
    input: {
      backgroundColor: getColor('ss-background', defaultModeId),
      borderColor: getColor('secondary-400', defaultModeId),
      borderRadius: getRadius('corner-radius-2'),
      paddingVertical: getSpacing('spacing-m'),
      paddingHorizontal: getSpacing('spacing-l'),
    },
    card: {
      backgroundColor: getColor('ss-background', defaultModeId),
      borderRadius: getRadius('corner-radius-1'),
      padding: getSpacing('spacing-l'),
      ...shadows.lg,
    },
  },
};

export type Theme = typeof theme;
