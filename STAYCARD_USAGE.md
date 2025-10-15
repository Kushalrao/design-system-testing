# StayCard Component Usage

## Overview

The **StayCard** component is a hotel/property card built directly from your [Figma design](https://www.figma.com/design/aU6YyuRvJZ4E2Pyz15paOv/Instant-discount?node-id=2232-15&t=0tAlLxmVSB0jBfEU-11) using your Scapia Design System variables.

## Design Tokens Used

This component uses your actual Figma variables:

### Border Radius
- `corner-radius-1`: **23px** - Main card border radius
- `corner-radius-2`: **12px** - Amenities container border radius

### Colors
- `ss-foreground`: **#ffffff** - Card background
- `primary-800`: **#000000** - Title text
- `secondary-400`: **#c2c2c2** - Location and labels

### Spacing
- `spacing-s`: **7px** - Small spacing
- `spacing-m`: **11px** - Medium spacing (padding, margins)
- `spacing-l`: **14px** - Large spacing (amenities margin)

### Typography
- `font-size-m`: **21px** - Title and price font size
- `font-size-cap-caption`: **12px** - Labels and small text

## Basic Usage

```tsx
import { StayCard } from 'design-system';

function MyApp() {
  return (
    <StayCard
      title="Hilton New York Fashion District"
      location="Miami/ Brickell"
      price="Rs 14,282"
      rating={5}
      image={{
        uri: 'https://example.com/hotel-image.jpg'
      }}
      moreAmenities="+ 8 More with Deluxe"
    />
  );
}
```

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `title` | `string` | ✅ | Hotel/property name |
| `location` | `string` | ✅ | Location subtitle (shown in gray) |
| `price` | `string` | ✅ | Price per night |
| `image` | `ImageSourcePropType` | ✅ | Main hotel image |
| `rating` | `number` | ❌ | Star rating (1-5), default: 5 |
| `logo` | `ImageSourcePropType` | ❌ | Hotel logo (bottom-left corner) |
| `amenities` | `ImageSourcePropType[]` | ❌ | Array of amenity icons |
| `moreAmenities` | `string` | ❌ | Additional amenities text (e.g., "+ 8 More with Deluxe") |
| `nightIcon` | `ImageSourcePropType` | ❌ | Night/moon icon next to price |
| `style` | `ViewStyle` | ❌ | Custom style overrides |

## Advanced Examples

### With Logo

```tsx
<StayCard
  title="Hilton New York Fashion District"
  location="Miami/ Brickell"
  price="Rs 14,282"
  rating={5}
  image={{ uri: 'https://example.com/hotel.jpg' }}
  logo={{ uri: 'https://example.com/hilton-logo.png' }}
  moreAmenities="+ 8 More with Deluxe"
/>
```

### With Amenity Icons

```tsx
<StayCard
  title="Grand Hotel & Spa"
  location="Beach Resort"
  price="Rs 32,500"
  rating={5}
  image={{ uri: 'https://example.com/resort.jpg' }}
  amenities={[
    { uri: 'https://example.com/icons/restaurant.svg' },
    { uri: 'https://example.com/icons/bar.svg' },
    { uri: 'https://example.com/icons/pool.svg' },
    { uri: 'https://example.com/icons/spa.svg' },
  ]}
  moreAmenities="+ 12 More with Premium"
/>
```

### With Night Icon

```tsx
<StayCard
  title="City Suites"
  location="Downtown"
  price="Rs 18,500"
  rating={4}
  image={{ uri: 'https://example.com/suite.jpg' }}
  nightIcon={{ uri: 'https://example.com/icons/moon.svg' }}
/>
```

### Different Ratings

```tsx
<View style={{ gap: 24 }}>
  <StayCard
    title="Luxury Hotel"
    location="Downtown"
    price="Rs 25,000"
    rating={5}
    image={{ uri: 'https://example.com/luxury.jpg' }}
  />
  
  <StayCard
    title="Boutique Hotel"
    location="Uptown"
    price="Rs 15,000"
    rating={4}
    image={{ uri: 'https://example.com/boutique.jpg' }}
  />
  
  <StayCard
    title="Budget Hotel"
    location="Suburbs"
    price="Rs 8,000"
    rating={3}
    image={{ uri: 'https://example.com/budget.jpg' }}
  />
</View>
```

### Custom Styling

```tsx
<StayCard
  title="Beach Resort"
  location="Coastal"
  price="Rs 22,000"
  rating={5}
  image={{ uri: 'https://example.com/beach.jpg' }}
  style={{
    width: 400,
    margin: 16,
  }}
/>
```

## Figma Design Mapping

The component matches your Figma design exactly:

| Figma Element | Component Implementation |
|---------------|-------------------------|
| Card container (rounded corners) | Uses `corner-radius-1` (23px) |
| White background | Uses `ss-foreground` (#ffffff) |
| Hotel image (254px height) | Fixed height with rounded top corners |
| Star rating (top-left) | 5-star rating system |
| Hotel logo (bottom-left) | Optional logo overlay |
| Title text | Uses `font-size-m` (21px), bold weight |
| Location text | 24% opacity black |
| Price text | Uses `font-size-m` (21px), semibold |
| "INCLUDES" label | Uses `font-size-cap-caption` (12px), `secondary-400` color |
| Amenities container | Uses `corner-radius-2` (12px), white bg, border |
| Shadow | 64px blur, 0.03 opacity |

## Design System Integration

### Automatic Token Updates

When you update these values in Figma and sync:
1. Click "Sync to Code" in the Figma plugin
2. The component automatically uses the new values
3. No code changes needed!

### Token Functions Used

The component internally uses these helper functions:
- `getColor()` - Gets color values from your Figma color tokens
- `getRadius()` - Gets border radius values
- `getSpacing()` - Gets spacing values
- `getTypographyValue()` - Gets font sizes and typography values

## Storybook

View all variants in Storybook at **http://localhost:6006**:

```bash
npm run storybook
```

Navigate to: **Components → StayCard**

Available stories:
- Default
- With Logo
- Different Ratings
- With Amenities
- Minimal

## Notes

- The component is fully responsive to your Figma design token changes
- All spacing, colors, and typography sync automatically from Figma
- Star rating currently uses simple colored circles (you can replace with actual star icons)
- Images support both local and remote sources
- Component is fully typed with TypeScript for autocomplete and type safety

## Complete Example

```tsx
import React from 'react';
import { ScrollView, View } from 'react-native';
import { StayCard } from 'design-system';

export function HotelListScreen() {
  const hotels = [
    {
      id: '1',
      title: 'Hilton New York Fashion District',
      location: 'Miami/ Brickell',
      price: 'Rs 14,282',
      rating: 5,
      image: { uri: 'https://example.com/hotel1.jpg' },
      logo: { uri: 'https://example.com/hilton.png' },
    },
    {
      id: '2',
      title: 'Grand Hotel & Spa',
      location: 'Beach Resort',
      price: 'Rs 32,500',
      rating: 5,
      image: { uri: 'https://example.com/hotel2.jpg' },
    },
  ];

  return (
    <ScrollView>
      <View style={{ padding: 16, gap: 24 }}>
        {hotels.map((hotel) => (
          <StayCard
            key={hotel.id}
            title={hotel.title}
            location={hotel.location}
            price={hotel.price}
            rating={hotel.rating}
            image={hotel.image}
            logo={hotel.logo}
            moreAmenities="+ 8 More with Deluxe"
          />
        ))}
      </View>
    </ScrollView>
  );
}
```

---

**Built with ❤️ using your Scapia Design System variables from Figma**

