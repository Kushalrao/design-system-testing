/**
 * Typography Component
 * Provides consistent text styling across the design system
 */

import React from 'react';
import { Text } from 'react-native';
import type { TextProps } from 'react-native';
import { typography, colors } from '../../tokens';
import type { ColorMode } from '../../tokens';
import { useColorScheme } from 'react-native';

export interface TypographyProps extends TextProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'bodyLarge' | 'bodyMedium' | 'bodySmall' | 'caption';
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  children: React.ReactNode;
}

export const Typography: React.FC<TypographyProps> = ({
  variant = 'bodyMedium',
  color = 'primary',
  style,
  children,
  ...props
}) => {
  const colorScheme = useColorScheme() as ColorMode;
  
  const getTypographyStyle = () => {
    switch (variant) {
      case 'h1':
        return typography.heading.h1;
      case 'h2':
        return typography.heading.h2;
      case 'h3':
        return typography.heading.h3;
      case 'h4':
        return typography.heading.h4;
      case 'h5':
        return typography.heading.h5;
      case 'h6':
        return typography.heading.h6;
      case 'bodyLarge':
        return typography.body.large;
      case 'bodyMedium':
        return typography.body.medium;
      case 'bodySmall':
        return typography.body.small;
      case 'caption':
        return typography.caption;
      default:
        return typography.body.medium;
    }
  };

  const getTextColor = () => {
    switch (color) {
      case 'primary':
        return colors.semantic.text.primary[colorScheme];
      case 'secondary':
        return colors.semantic.text.secondary[colorScheme];
      case 'success':
        return colors.semantic.success[colorScheme];
      case 'warning':
        return colors.semantic.warning[colorScheme];
      case 'error':
        return colors.semantic.error[colorScheme];
      default:
        return colors.semantic.text.primary[colorScheme];
    }
  };

  const typographyStyle = getTypographyStyle();
  const textColor = getTextColor();

  return (
    <Text
      style={[
        {
          fontFamily: typography.fontFamily.primary,
          fontSize: typographyStyle.fontSize,
          fontWeight: typographyStyle.fontWeight,
          lineHeight: typographyStyle.lineHeight * typographyStyle.fontSize,
          letterSpacing: typographyStyle.letterSpacing,
          color: textColor,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};

// Convenience components for common typography variants
export const Heading1: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="h1" {...props} />
);

export const Heading2: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="h2" {...props} />
);

export const Heading3: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="h3" {...props} />
);

export const Heading4: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="h4" {...props} />
);

export const Heading5: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="h5" {...props} />
);

export const Heading6: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="h6" {...props} />
);

export const BodyLarge: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="bodyLarge" {...props} />
);

export const BodyMedium: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="bodyMedium" {...props} />
);

export const BodySmall: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="bodySmall" {...props} />
);

export const Caption: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="caption" {...props} />
);
