# 🚀 Quick Start Guide

## Run on Android Simulator

### Option 1: Use the Script (Easiest)

```bash
./RUN_ANDROID.sh
```

### Option 2: Manual Commands

```bash
cd /Users/kushal/Downloads/Design\ system\ exp/design-system/example
npm run android
```

### Option 3: Step by Step

```bash
# 1. Navigate to the design-system directory
cd /Users/kushal/Downloads/Design\ system\ exp/design-system

# 2. Go to example folder
cd example

# 3. Run Android
npm run android
```

## Run on iOS Simulator (Mac only)

```bash
cd /Users/kushal/Downloads/Design\ system\ exp/design-system/example
npm run ios
```

## Run on Expo Go (Mobile Device)

```bash
cd /Users/kushal/Downloads/Design\ system\ exp/design-system/example
npm start
```

Then scan the QR code with:
- **iOS**: Camera app
- **Android**: Expo Go app

## View Storybook

```bash
cd /Users/kushal/Downloads/Design\ system\ exp/design-system
npm run storybook
```

Open: http://localhost:6006

## Sync Figma Variables

1. Open Figma plugin in your design file
2. Enter GitHub token (one-time)
3. Click "🔄 Sync to Code"
4. Wait for success message
5. Tokens automatically update in code!

## File Locations

- **Mobile App**: `design-system/example/src/App.tsx`
- **Components**: `design-system/src/components/`
- **Design Tokens**: `design-system/src/tokens/`
- **Figma Plugin**: `design-system/figma-plugin/`
- **Storybook**: `design-system/stories/`

## Troubleshooting

### "No such file or directory"

Make sure you're in the correct directory:

```bash
cd /Users/kushal/Downloads/Design\ system\ exp/design-system
pwd  # Should show: /Users/kushal/Downloads/Design system exp/design-system
```

### "Metro bundler port busy"

```bash
lsof -ti:8081 | xargs kill -9
```

### "Android emulator not found"

Start emulator first:

```bash
emulator -list-avds
emulator -avd Pixel_5_API_33 &
```

---

**All paths are absolute - just copy and paste!** ✨

