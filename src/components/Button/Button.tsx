/**
 * Button Component
 * Provides consistent button styling across the design system
 */

import React from 'react';
import { Pressable } from 'react-native';
import type { PressableProps, ViewStyle } from 'react-native';
import { colors, shadows, getColor, getSpacing, getRadius } from '../../tokens';
import { Typography } from '../Typography';

export interface ButtonProps extends Omit<PressableProps, 'style'> {
  variant?: 'primary' | 'secondary' | 'ghost';
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
  // Get the first available mode ID from any token
  const firstColor = Object.values(colors)[0];
  const defaultModeId = firstColor ? Object.keys(firstColor)[0] : '1396:1';

  const getButtonStyle = (): ViewStyle => {
    const baseStyle: ViewStyle = {
      borderRadius: getRadius('corner-radius-2'),
      paddingVertical: getSpacing('spacing-m'),
      paddingHorizontal: getSpacing('spacing-l'),
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      ...shadows.md,
    };

    // Size variants
    const sizeStyles: Record<string, ViewStyle> = {
      sm: {
        paddingVertical: getSpacing('spacing-s'),
        paddingHorizontal: getSpacing('spacing-m'),
      },
      md: {
        paddingVertical: getSpacing('spacing-m'),
        paddingHorizontal: getSpacing('spacing-l'),
      },
      lg: {
        paddingVertical: getSpacing('spacing-l'),
        paddingHorizontal: getSpacing('spacing-xl'),
      },
    };

    // Variant styles
    const variantStyles: Record<string, ViewStyle> = {
      primary: {
        backgroundColor: disabled 
          ? getColor('secondary-400', defaultModeId)
          : getColor('primary-800', defaultModeId),
      },
      secondary: {
        backgroundColor: disabled 
          ? getColor('secondary-400', defaultModeId)
          : getColor('primary-600', defaultModeId),
      },
      ghost: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: disabled 
          ? getColor('secondary-400', defaultModeId)
          : getColor('primary-800', defaultModeId),
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
      return getColor('secondary-400', defaultModeId);
    }

    switch (variant) {
      case 'primary':
      case 'secondary':
        return getColor('ss-foreground', defaultModeId);
      case 'ghost':
        return getColor('primary-800', defaultModeId);
      default:
        return getColor('ss-foreground', defaultModeId);
    }
  };

  const getTextVariant = () => {
    switch (size) {
      case 'sm':
        return 'caption';
      case 'md':
        return 'body';
      case 'lg':
        return 'bodyLarge';
      default:
        return 'body';
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
