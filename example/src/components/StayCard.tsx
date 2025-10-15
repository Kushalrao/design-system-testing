/**
 * StayCard Component
 * Hotel/Stay card component from Figma design
 * Using design tokens from the Scapia Design System
 */

import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import type { ViewStyle, ImageSourcePropType } from 'react-native';

// Design tokens from your Figma variables
const tokens = {
  colors: {
    'primary-800': '#000000',
    'primary-600': '#212121', 
    'secondary-400': '#c2c2c2',
    'ss-foreground': '#ffffff',
    'ss-background': '#f7f7f2',
  },
  spacing: {
    'spacing-s': 7,
    'spacing-m': 11,
    'spacing-l': 14,
    'spacing-xl': 21,
  },
  radius: {
    'corner-radius-1': 23,
    'corner-radius-2': 12,
  },
  typography: {
    'font-size-m': 21,
    'font-size-cap-caption': 12,
  }
};

export interface StayCardProps {
  /** Hotel/property image */
  image: ImageSourcePropType;
  /** Hotel logo (optional) */
  logo?: ImageSourcePropType;
  /** Hotel name */
  title: string;
  /** Location subtitle */
  location: string;
  /** Price per night */
  price: string;
  /** Star rating (1-5) */
  rating?: number;
  /** Additional amenities text */
  moreAmenities?: string;
  /** Custom style */
  style?: ViewStyle;
}

export const StayCard: React.FC<StayCardProps> = ({
  image,
  logo,
  title,
  location,
  price,
  rating = 5,
  moreAmenities,
  style,
}) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: tokens.colors['ss-foreground'],
      borderRadius: tokens.radius['corner-radius-1'],
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.03,
      shadowRadius: 64,
      elevation: 4,
      overflow: 'hidden',
      width: 372,
      marginBottom: 24,
    },
    imageContainer: {
      height: 254,
      borderTopLeftRadius: tokens.radius['corner-radius-1'],
      borderTopRightRadius: tokens.radius['corner-radius-1'],
      borderWidth: 8,
      borderColor: tokens.colors['ss-foreground'],
      overflow: 'hidden',
      position: 'relative',
    },
    mainImage: {
      width: '100%',
      height: '100%',
    },
    logo: {
      position: 'absolute',
      bottom: 8,
      left: 0,
      width: 88,
      height: 60,
    },
    starContainer: {
      position: 'absolute',
      top: 22,
      left: 20,
      flexDirection: 'row',
      gap: 8,
    },
    star: {
      width: 16,
      height: 16,
      backgroundColor: '#FFD700',
      borderRadius: 8,
    },
    titleContainer: {
      marginTop: 11,
      marginHorizontal: 11,
    },
    title: {
      fontSize: tokens.typography['font-size-m'],
      fontWeight: '700',
      color: tokens.colors['primary-800'],
      lineHeight: 25,
    },
    location: {
      fontSize: tokens.typography['font-size-m'],
      color: 'rgba(0,0,0,0.24)',
      lineHeight: 25,
    },
    priceContainer: {
      position: 'absolute',
      right: 11,
      top: 265,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 4,
    },
    price: {
      fontSize: tokens.typography['font-size-m'],
      fontWeight: '600',
      color: tokens.colors['primary-800'],
      lineHeight: 25,
    },
    includesLabel: {
      marginTop: tokens.spacing['spacing-s'],
      marginBottom: tokens.spacing['spacing-s'],
      textAlign: 'center',
      fontSize: tokens.typography['font-size-cap-caption'],
      color: tokens.colors['secondary-400'],
      fontWeight: '500',
    },
    amenitiesContainer: {
      backgroundColor: tokens.colors['ss-foreground'],
      borderWidth: 1,
      borderColor: '#f0f0f0',
      borderRadius: tokens.radius['corner-radius-2'],
      paddingVertical: 16,
      paddingHorizontal: 12,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
      alignSelf: 'center',
      marginTop: tokens.spacing['spacing-l'],
      marginBottom: 16,
    },
    amenityText: {
      fontSize: tokens.typography['font-size-cap-caption'],
      color: tokens.colors['secondary-400'],
      fontWeight: '500',
    },
  });

  // Render star rating
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <View key={i} style={styles.star} />
      );
    }
    return stars;
  };

  return (
    <View style={[styles.container, style]}>
      {/* Main Image Container */}
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.mainImage} resizeMode="cover" />
        
        {/* Logo */}
        {logo && <Image source={logo} style={styles.logo} resizeMode="contain" />}
        
        {/* Star Rating */}
        <View style={styles.starContainer}>{renderStars()}</View>
      </View>

      {/* Title and Location */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          {title}{' '}
          <Text style={styles.location}>{location}</Text>
        </Text>
      </View>

      {/* Price */}
      <View style={styles.priceContainer}>
        <Text style={styles.price}>{price}</Text>
        <Text style={{ fontSize: 19 }}>🌙</Text>
      </View>

      {/* Includes Label */}
      <Text style={styles.includesLabel}>INCLUDES</Text>

      {/* Amenities */}
      {moreAmenities && (
        <View style={styles.amenitiesContainer}>
          <Text style={styles.amenityText}>🍽️ 🍸 🍽️ 🍸 ♠️ ♠️</Text>
          <Text style={styles.amenityText}>{moreAmenities}</Text>
        </View>
      )}
    </View>
  );
};
