/**
 * StayCard Component
 * Hotel/Stay card component from Figma design
 * Using design tokens from the Scapia Design System
 */

import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import type { ViewStyle, ImageSourcePropType } from 'react-native';
import { getColor, getRadius, getSpacing, getTypographyValue } from '../../tokens';
import { Typography } from '../Typography';

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
  /** Amenity icons */
  amenities?: ImageSourcePropType[];
  /** Additional amenities text */
  moreAmenities?: string;
  /** Night icon */
  nightIcon?: ImageSourcePropType;
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
  amenities = [],
  moreAmenities,
  nightIcon,
  style,
}) => {
  const modeId = '1396:1'; // Your default mode ID

  const styles = StyleSheet.create({
    container: {
      backgroundColor: getColor('ss-foreground', modeId),
      borderRadius: getRadius('corner-radius-1'),
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.03,
      shadowRadius: 64,
      elevation: 4,
      overflow: 'hidden',
      width: 372,
    },
    imageContainer: {
      height: 254,
      borderTopLeftRadius: getRadius('corner-radius-1'),
      borderTopRightRadius: getRadius('corner-radius-1'),
      borderWidth: 8,
      borderColor: getColor('ss-foreground', modeId),
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
    },
    contentContainer: {
      padding: getSpacing('spacing-m'),
    },
    titleContainer: {
      marginTop: 11,
      marginHorizontal: 11,
    },
    priceContainer: {
      position: 'absolute',
      right: 11,
      top: 265,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 4,
    },
    nightIcon: {
      width: 19,
      height: 19,
    },
    includesLabel: {
      marginTop: getSpacing('spacing-s'),
      marginBottom: getSpacing('spacing-s'),
      textAlign: 'center',
    },
    amenitiesContainer: {
      backgroundColor: getColor('ss-foreground', modeId),
      borderWidth: 1,
      borderColor: '#f0f0f0',
      borderRadius: getRadius('corner-radius-2'),
      paddingVertical: 16,
      paddingHorizontal: 12,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
      alignSelf: 'center',
      marginTop: getSpacing('spacing-l'),
    },
    amenityIcon: {
      width: 19,
      height: 19,
    },
  });

  // Render star rating
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <View key={i} style={styles.star}>
          {/* You can replace this with actual star icons */}
          <View
            style={{
              width: 16,
              height: 16,
              backgroundColor: i < rating ? '#FFD700' : '#D3D3D3',
              borderRadius: 8,
            }}
          />
        </View>
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
        <Typography
          variant="h3"
          color="primary"
          style={{
            fontSize: getTypographyValue('fontSize', 'font-size-m', modeId) as number,
            fontWeight: '700',
          }}
        >
          {title}{' '}
          <Typography
            variant="h3"
            customColor="rgba(0,0,0,0.24)"
            style={{
              fontSize: getTypographyValue('fontSize', 'font-size-m', modeId) as number,
            }}
          >
            {location}
          </Typography>
        </Typography>
      </View>

      {/* Price */}
      <View style={styles.priceContainer}>
        <Typography
          variant="h2"
          color="primary"
          style={{
            fontSize: getTypographyValue('fontSize', 'font-size-m', modeId) as number,
            fontWeight: '600',
          }}
        >
          {price}
        </Typography>
        {nightIcon && <Image source={nightIcon} style={styles.nightIcon} />}
      </View>

      {/* Includes Label */}
      <Typography
        variant="caption"
        color="secondary"
        style={{
          ...styles.includesLabel,
          fontSize: getTypographyValue('fontSize', 'font-size-cap-caption', modeId) as number,
        }}
      >
        INCLUDES
      </Typography>

      {/* Amenities */}
      {amenities.length > 0 && (
        <View style={styles.amenitiesContainer}>
          {amenities.map((amenity, index) => (
            <Image
              key={index}
              source={amenity}
              style={styles.amenityIcon}
              resizeMode="contain"
            />
          ))}
          {moreAmenities && (
            <Typography
              variant="caption"
              color="secondary"
              style={{
                fontSize: getTypographyValue('fontSize', 'font-size-cap-caption', modeId) as number,
                fontWeight: '500',
              }}
            >
              {moreAmenities}
            </Typography>
          )}
        </View>
      )}
    </View>
  );
};

