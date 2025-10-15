# 🤖 Running on Android Simulator

## Quick Start

```bash
cd design-system/example
npm run android
```

This command is **currently running** in the background! 🚀

## What's Happening Now

1. **Expo is building** your app
2. **Metro bundler** is starting
3. **Android emulator** will launch (if not already running)
4. **App will install** and open automatically

## Expected Flow

```
Starting Metro Bundler...
  ↓
Building Android app...
  ↓
Launching Android emulator...
  ↓
Installing app...
  ↓
Opening app on device...
  ↓
✅ App running!
```

## Requirements

### 1. Android Studio

If you don't have Android Studio installed:

```bash
# Download from:
https://developer.android.com/studio

# Install and open Android Studio
# Go to: Tools → SDK Manager → SDK Tools
# Install:
- Android SDK Platform-Tools
- Android SDK Build-Tools
- Android Emulator
```

### 2. Android Emulator

**Create a virtual device:**

1. Open **Android Studio**
2. Click **More Actions** → **Virtual Device Manager**
3. Click **Create Device**
4. Select a device (e.g., **Pixel 5**)
5. Select system image (e.g., **Android 13 - API 33**)
6. Click **Finish**

**Or use command line:**

```bash
# List available emulators
emulator -list-avds

# Start specific emulator
emulator -avd Pixel_5_API_33 &

# Or start any emulator
emulator @Pixel_5_API_33
```

### 3. Environment Variables

Add to `~/.zshrc` or `~/.bash_profile`:

```bash
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

Then reload:
```bash
source ~/.zshrc
```

## Troubleshooting

### ❌ "adb: command not found"

```bash
# Add to PATH
export PATH=$PATH:$HOME/Library/Android/sdk/platform-tools

# Or install via Homebrew
brew install --cask android-platform-tools
```

### ❌ "No emulators found"

**Start an emulator first:**

```bash
# List available
emulator -list-avds

# Start one
emulator -avd Pixel_5_API_33
```

**Or open Android Studio:**
- Tools → Device Manager → Play button on a device

### ❌ "Gradle build failed"

```bash
cd android
./gradlew clean
cd ..
npm run android
```

### ❌ "Port 8081 already in use"

```bash
# Kill the process
lsof -ti:8081 | xargs kill -9

# Or use different port
npx expo start --port 8082
```

### ❌ "Emulator is slow"

**Enable hardware acceleration:**

1. System Preferences → Security & Privacy
2. Allow "Intel HAXM" or enable Hypervisor
3. Or use ARM-based emulator for M1/M2 Macs

**Or increase emulator RAM:**

1. Android Studio → Device Manager
2. Edit device → Show Advanced Settings
3. Increase RAM to 4GB+

### ❌ "App installed but won't open"

```bash
# Clear cache and rebuild
cd example
npx expo start --clear
npm run android
```

### ❌ "Metro bundler connection failed"

```bash
# Check if emulator can reach localhost
adb reverse tcp:8081 tcp:8081

# Then reload app (press R R in terminal)
```

## Manual Steps (If automatic doesn't work)

### Step 1: Start Emulator

```bash
emulator -avd Pixel_5_API_33
```

Wait for emulator to fully boot (shows home screen)

### Step 2: Start Metro Bundler

```bash
cd design-system/example
npm start
```

### Step 3: Build and Install

In a new terminal:

```bash
cd design-system/example
npm run android
```

## Alternative: Physical Android Device

### Setup

1. **Enable Developer Options:**
   - Go to Settings → About Phone
   - Tap "Build Number" 7 times

2. **Enable USB Debugging:**
   - Settings → Developer Options
   - Turn on "USB Debugging"

3. **Connect device via USB**

4. **Check connection:**
   ```bash
   adb devices
   ```

5. **Run app:**
   ```bash
   npm run android
   ```

## Check Current Status

### See running emulators:
```bash
adb devices
```

Output should show:
```
List of devices attached
emulator-5554	device
```

### Check if Metro is running:
```bash
curl http://localhost:8081/status
```

Should return: `packager-status:running`

### View app logs:
```bash
# All logs
adb logcat

# Filter for React Native
adb logcat | grep ReactNative

# Clear logs
adb logcat -c
```

## What You Should See

Once running, you'll see:

### Terminal:
```
› Opening on Android...
› Opening exp://192.168.x.x:8081 on emulator-5554
› Press a │ open Android
› Press r │ reload app
› Press m │ toggle menu
```

### Android Emulator:
1. Expo Go app opens
2. "Featured Stays" header appears
3. 5 beautiful hotel cards
4. Smooth scrolling
5. All your Figma design tokens in action!

## Hot Reload

Make changes to `example/src/App.tsx` and:
- **Automatic**: Save file → App reloads
- **Manual**: Press `r` in terminal twice

## Useful Commands

```bash
# Reload app
adb shell input text "RR"

# Or press R R in terminal

# Open developer menu
adb shell input keyevent 82

# Restart Metro bundler
npm start -- --reset-cache

# Build release version
npm run android -- --variant=release

# Uninstall app
adb uninstall host.exp.exponent

# Take screenshot
adb shell screencap -p /sdcard/screenshot.png
adb pull /sdcard/screenshot.png
```

## Performance Tips

1. **Use Release Build** for better performance:
   ```bash
   npm run android -- --variant=release
   ```

2. **Close other apps** in emulator

3. **Increase emulator specs** (RAM, CPU cores)

4. **Use physical device** for best performance

5. **Disable animations** in Developer Options

## Next Steps

Once the app is running:

1. ✅ **See your StayCard** components
2. ✅ **Test scrolling** and interactions
3. ✅ **Modify code** in `App.tsx` (hot reload)
4. ✅ **Update Figma tokens** and sync
5. ✅ **Reload app** to see changes

## Current Status

The command `npm run android` is **running in the background**. 

Check your terminal for:
- Build progress
- Emulator launch status
- Any error messages

The app should open automatically once the build completes!

## Expected Timeline

- **First build**: 2-5 minutes
- **Subsequent builds**: 30-60 seconds
- **Hot reload**: Instant

---

**Your StayCard component is launching on Android!** 🤖📱

**Check your terminal for build status and the Android emulator will open automatically!**

