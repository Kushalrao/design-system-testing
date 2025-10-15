# 📱 Mobile Demo - StayCard Showcase

## Overview

A beautiful React Native mobile app showcasing your **StayCard** component with real hotel examples.

## What's Included

The example app displays:
- 🏨 **5 Hotel Cards** - Each using the StayCard component
- 🎨 **Your Design Tokens** - All spacing, colors, typography from Figma
- 📱 **Mobile-Optimized** - Fully scrollable, responsive design
- 🖼️ **Real Images** - Professional hotel photos from Unsplash

## Featured Hotels

1. **Hilton New York Fashion District** - Miami/Brickell
2. **Grand Hotel & Spa** - Beach Resort, Goa
3. **Boutique Heritage Hotel** - Jaipur, Rajasthan
4. **City Central Suites** - Mumbai, Maharashtra
5. **Luxury Beach Resort** - Maldives

## How to Run

### Option 1: Expo Go (Easiest)

1. **Install Expo Go** on your phone:
   - iOS: [App Store](https://apps.apple.com/app/expo-go/id982107779)
   - Android: [Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)

2. **Start the app:**
   ```bash
   cd design-system/example
   npm start
   ```

3. **Scan the QR code** with:
   - iOS: Camera app
   - Android: Expo Go app

4. **View on your phone!** 🎉

### Option 2: iOS Simulator (Mac Only)

```bash
cd design-system/example
npm run ios
```

This will:
- Build the app
- Launch iOS Simulator
- Open the app automatically

### Option 3: Android Emulator

```bash
cd design-system/example
npm run android
```

Requirements:
- Android Studio installed
- Android emulator running

### Option 4: Web Preview

```bash
cd design-system/example
npm run web
```

Opens in browser at `http://localhost:8081`

## What You'll See

```
┌─────────────────────────┐
│  Featured Stays         │
│  Discover amazing...    │
├─────────────────────────┤
│                         │
│   [Hotel Image]         │
│   ⭐⭐⭐⭐⭐            │
│   [Hilton Logo]         │
│                         │
│   Hilton New York...    │
│   Miami/ Brickell       │
│   Rs 14,282 🌙          │
│                         │
│   INCLUDES              │
│   🍽️ 🍸 🍽️ 🍸 ♠️ ♠️     │
│   + 8 More with Deluxe  │
│                         │
├─────────────────────────┤
│   [Next Hotel Card]     │
│   ...                   │
└─────────────────────────┘
```

## Code

The example app is super simple:

```tsx
import { StayCard, Typography } from 'design-system';

export default function App() {
  return (
    <ScrollView>
      <Typography variant="h1">Featured Stays</Typography>
      
      <StayCard
        title="Hilton New York Fashion District"
        location="Miami/ Brickell"
        price="Rs 14,282"
        rating={5}
        image={{ uri: 'https://...' }}
        moreAmenities="+ 8 More with Deluxe"
      />
      
      {/* More cards... */}
    </ScrollView>
  );
}
```

## Customization

### Change Hotels

Edit `example/src/App.tsx`:

```tsx
<StayCard
  title="Your Hotel Name"
  location="Your Location"
  price="Rs XX,XXX"
  rating={5}
  image={{ uri: 'your-image-url' }}
  moreAmenities="+ X More"
/>
```

### Add Your Own Images

Replace image URIs with:
- Your hotel images
- Local images: `require('./assets/hotel.jpg')`
- Remote URLs: `{ uri: 'https://...' }`

### Modify Styling

Add custom styles:

```tsx
<StayCard
  // ... other props
  style={{
    width: 400,
    margin: 20,
  }}
/>
```

## Design Tokens in Action

The app automatically uses your Figma variables:

| Element | Figma Variable | Value |
|---------|----------------|-------|
| Card corners | `corner-radius-1` | 23px |
| Amenities container | `corner-radius-2` | 12px |
| Background | `ss-foreground` | #ffffff |
| Title color | `primary-800` | #000000 |
| Location color | `secondary-400` | #c2c2c2 |
| Title font size | `font-size-m` | 21px |
| Label font size | `font-size-cap-caption` | 12px |
| Spacing | `spacing-s/m/l` | 7/11/14px |

### Update Design Tokens

1. Change values in Figma
2. Click "Sync to Code" in plugin
3. The mobile app automatically uses new values!
4. No code changes needed ✨

## Troubleshooting

### Metro bundler issues
```bash
npx expo start --clear
```

### Dependencies not installed
```bash
cd example
npm install --legacy-peer-deps
```

### iOS Simulator not opening
```bash
# Open simulator first
open -a Simulator

# Then run
npm run ios
```

### Android emulator issues
```bash
# List available devices
emulator -list-avds

# Start specific emulator
emulator -avd Pixel_5_API_30
```

### Port already in use
```bash
# Kill process on port 8081
lsof -ti:8081 | xargs kill -9

# Or use different port
npx expo start --port 8082
```

## File Structure

```
design-system/
└── example/
    ├── src/
    │   └── App.tsx          ← Your mobile app
    ├── assets/              ← App icons/splash
    ├── package.json         ← Dependencies
    └── app.json            ← Expo config
```

## Features

- ✅ **Scrollable List** - Smooth scrolling on mobile
- ✅ **Safe Area** - Respects notches and status bars
- ✅ **Real Images** - Professional hotel photos
- ✅ **Design Tokens** - All styling from Figma
- ✅ **TypeScript** - Full type safety
- ✅ **Expo** - Easy development and deployment

## Next Steps

### Add More Components

```tsx
import { Button, Typography, StayCard } from 'design-system';

<Button variant="primary">Book Now</Button>
<Typography variant="h2">Special Offers</Typography>
```

### Build for Production

```bash
# iOS
eas build --platform ios

# Android
eas build --platform android
```

### Publish to Expo

```bash
npx expo publish
```

## Screenshots

The app shows:
- Beautiful header with title
- Scrollable list of hotel cards
- Each card with image, rating, price
- Amenities section
- Professional spacing and layout

## Requirements

- Node.js 16+
- npm or yarn
- Expo Go app (for mobile testing)
- macOS (for iOS simulator)
- Android Studio (for Android emulator)

---

**Your Figma design is now running on mobile!** 🚀📱

Ready to see it? Run:
```bash
cd design-system/example
npm start
```

Then scan the QR code with Expo Go!

