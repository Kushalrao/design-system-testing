/**
 * Typography Component
 * Provides consistent text styling across the design system
 */

import React from 'react';
import { Text } from 'react-native';
import type { TextProps, TextStyle } from 'react-native';
import { colors, getColor, getTypographyValue } from '../../tokens';

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
  // Get the first available mode ID from any token
  const firstColor = Object.values(colors)[0];
  const defaultModeId = firstColor ? Object.keys(firstColor)[0] : '1396:1';

  const getVariantStyle = (): TextStyle => {
    switch (variant) {
      case 'h1':
        return {
          fontSize: getTypographyValue('fontSize', 'font-size-xl', defaultModeId) as number,
          lineHeight: getTypographyValue('lineHeight', 'large-line-height', defaultModeId) as number,
          fontWeight: '700',
        };
      case 'h2':
        return {
          fontSize: getTypographyValue('fontSize', 'font-size-m', defaultModeId) as number,
          lineHeight: getTypographyValue('lineHeight', 'large-line-height', defaultModeId) as number,
          fontWeight: '700',
        };
      case 'h3':
        return {
          fontSize: getTypographyValue('fontSize', 'font-size-m', defaultModeId) as number,
          lineHeight: getTypographyValue('lineHeight', 'average-line-height', defaultModeId) as number,
          fontWeight: '600',
        };
      case 'bodyLarge':
        return {
          fontSize: getTypographyValue('fontSize', 'font-size-m', defaultModeId) as number,
          lineHeight: getTypographyValue('lineHeight', 'average-line-height', defaultModeId) as number,
          fontWeight: '400',
        };
      case 'body':
        return {
          fontSize: getTypographyValue('fontSize', 'font-size-xs', defaultModeId) as number,
          lineHeight: getTypographyValue('lineHeight', 'average-line-height', defaultModeId) as number,
          fontWeight: '400',
        };
      case 'caption':
        return {
          fontSize: getTypographyValue('fontSize', 'font-size-cap-caption', defaultModeId) as number,
          lineHeight: getTypographyValue('lineHeight', 'average-line-height', defaultModeId) as number,
          fontWeight: '400',
        };
      default:
        return {
          fontSize: getTypographyValue('fontSize', 'font-size-xs', defaultModeId) as number,
          lineHeight: getTypographyValue('lineHeight', 'average-line-height', defaultModeId) as number,
          fontWeight: '400',
        };
    }
  };

  const getTextColor = (): string => {
    if (customColor) return customColor;

    switch (color) {
      case 'primary':
        return getColor('primary-800', defaultModeId);
      case 'secondary':
        return getColor('primary-600', defaultModeId);
      default:
        return getColor('primary-800', defaultModeId);
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
