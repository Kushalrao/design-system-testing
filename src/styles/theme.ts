/**
 * Theme System
 * Combines all design tokens into a cohesive theme
 */

import { colors, spacing, typography, radius, shadows } from '../tokens';

export const theme = {
  colors,
  spacing,
  typography,
  radius,
  shadows,
  
  // Computed theme values
  components: {
    button: {
      primary: {
        backgroundColor: colors.semantic.primary.light,
        color: colors.primitive.white,
        borderRadius: radius.button,
        paddingVertical: spacing.button.paddingVertical,
        paddingHorizontal: spacing.button.paddingHorizontal,
        ...typography.body.medium,
        ...shadows.button,
      },
      secondary: {
        backgroundColor: colors.semantic.secondary.light,
        color: colors.primitive.white,
        borderRadius: radius.button,
        paddingVertical: spacing.button.paddingVertical,
        paddingHorizontal: spacing.button.paddingHorizontal,
        ...typography.body.medium,
        ...shadows.button,
      },
    },
    input: {
      backgroundColor: colors.primitive.white,
      borderColor: colors.primitive.gray300,
      borderRadius: radius.input,
      paddingVertical: spacing.input.paddingVertical,
      paddingHorizontal: spacing.input.paddingHorizontal,
      ...typography.body.medium,
    },
    card: {
      backgroundColor: colors.primitive.white,
      borderRadius: radius.card,
      padding: spacing.card.padding,
      ...shadows.card,
    },
  },
} as const;

export type Theme = typeof theme;
