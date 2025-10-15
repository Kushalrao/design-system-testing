/**
 * Typography Component
 * Simple text component using design tokens
 */

import React from 'react';
import { Text, StyleSheet } from 'react-native';
import type { TextProps, TextStyle } from 'react-native';

// Design tokens from your Figma variables
const tokens = {
  colors: {
    'primary-800': '#000000',
    'primary-600': '#212121', 
    'secondary-400': '#c2c2c2',
  },
  typography: {
    'font-size-xl': 18,
    'font-size-m': 21,
    'font-size-xs': 12,
    'font-size-cap-caption': 12,
  }
};

export interface TypographyProps extends TextProps {
  variant?: 'h1' | 'h2' | 'h3' | 'body' | 'bodyLarge' | 'caption';
  color?: 'primary' | 'secondary' | 'custom';
  customColor?: string;
  style?: TextStyle;
}

export const Typography: React.FC<TypographyProps> = ({
  variant = 'body',
  color = 'primary',
  customColor,
  children,
  style,
  ...props
}) => {
  const getVariantStyle = (): TextStyle => {
    switch (variant) {
      case 'h1':
        return {
          fontSize: tokens.typography['font-size-xl'],
          lineHeight: 25,
          fontWeight: '700',
        };
      case 'h2':
        return {
          fontSize: tokens.typography['font-size-m'],
          lineHeight: 25,
          fontWeight: '700',
        };
      case 'h3':
        return {
          fontSize: tokens.typography['font-size-m'],
          lineHeight: 25,
          fontWeight: '600',
        };
      case 'bodyLarge':
        return {
          fontSize: tokens.typography['font-size-m'],
          lineHeight: 15,
          fontWeight: '400',
        };
      case 'body':
        return {
          fontSize: tokens.typography['font-size-xs'],
          lineHeight: 15,
          fontWeight: '400',
        };
      case 'caption':
        return {
          fontSize: tokens.typography['font-size-cap-caption'],
          lineHeight: 15,
          fontWeight: '400',
        };
      default:
        return {
          fontSize: tokens.typography['font-size-xs'],
          lineHeight: 15,
          fontWeight: '400',
        };
    }
  };

  const getTextColor = (): string => {
    if (customColor) return customColor;

    switch (color) {
      case 'primary':
        return tokens.colors['primary-800'];
      case 'secondary':
        return tokens.colors['primary-600'];
      default:
        return tokens.colors['primary-800'];
    }
  };

  const variantStyle = getVariantStyle();
  const textColor = getTextColor();

  return (
    <Text
      style={[
        variantStyle,
        { color: textColor },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};
