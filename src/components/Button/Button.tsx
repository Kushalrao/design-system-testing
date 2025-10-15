/**
 * Button Component
 * Provides consistent button styling across the design system
 */

import React from 'react';
import { Pressable } from 'react-native';
import type { PressableProps, ViewStyle } from 'react-native';
import { colors, spacing, radius, shadows } from '../../tokens';
import type { ColorMode } from '../../tokens';
import { useColorScheme } from 'react-native';
import { Typography } from '../Typography';

export interface ButtonProps extends Omit<PressableProps, 'style'> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
  style?: ViewStyle;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  children,
  style,
  ...props
}) => {
  const colorScheme = useColorScheme() as ColorMode;

  const getButtonStyle = (): ViewStyle => {
    const baseStyle: ViewStyle = {
      borderRadius: radius.button,
      paddingVertical: spacing.button.paddingVertical,
      paddingHorizontal: spacing.button.paddingHorizontal,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      ...shadows.button,
    };

    // Size variants
    const sizeStyles: Record<string, ViewStyle> = {
      sm: {
        paddingVertical: spacing.sm,
        paddingHorizontal: spacing.md,
      },
      md: {
        paddingVertical: spacing.button.paddingVertical,
        paddingHorizontal: spacing.button.paddingHorizontal,
      },
      lg: {
        paddingVertical: spacing.lg,
        paddingHorizontal: spacing.xl,
      },
    };

    // Variant styles
    const variantStyles: Record<string, ViewStyle> = {
      primary: {
        backgroundColor: disabled 
          ? colors.primitive.gray300 
          : colors.semantic.primary[colorScheme],
      },
      secondary: {
        backgroundColor: disabled 
          ? colors.primitive.gray300 
          : colors.semantic.secondary[colorScheme],
      },
      tertiary: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: disabled 
          ? colors.primitive.gray300 
          : colors.semantic.primary[colorScheme],
      },
      ghost: {
        backgroundColor: 'transparent',
      },
    };

    return {
      ...baseStyle,
      ...sizeStyles[size],
      ...variantStyles[variant],
    };
  };

  const getTextColor = (): string => {
    if (disabled) {
      return colors.primitive.gray500;
    }

    switch (variant) {
      case 'primary':
      case 'secondary':
        return colors.primitive.white;
      case 'tertiary':
        return colors.semantic.primary[colorScheme];
      case 'ghost':
        return colors.semantic.primary[colorScheme];
      default:
        return colors.primitive.white;
    }
  };

  const getTextVariant = () => {
    switch (size) {
      case 'sm':
        return 'bodySmall';
      case 'md':
        return 'bodyMedium';
      case 'lg':
        return 'bodyLarge';
      default:
        return 'bodyMedium';
    }
  };

  const buttonStyle = getButtonStyle();
  const textColor = getTextColor();
  const textVariant = getTextVariant();

  return (
    <Pressable
      style={({ pressed }) => [
        buttonStyle,
        pressed && !disabled && {
          opacity: 0.8,
        },
        disabled && {
          opacity: 0.5,
        },
        style,
      ]}
      disabled={disabled || loading}
      {...props}
    >
      <Typography
        variant={textVariant}
        style={{
          color: textColor,
          fontWeight: '600',
        }}
      >
        {loading ? 'Loading...' : children}
      </Typography>
    </Pressable>
  );
};
