# Design System Sync - Figma Plugin

This plugin syncs design tokens from Figma Variables to your React Native design system code.

## 🚀 Installation

1. **In Figma Desktop App:**
   - Go to **Plugins** → **Development** → **Import plugin from manifest**
   - Select this file: `manifest.json`
   - The plugin will appear in your plugins list

## 🎨 Setup Design Variables in Figma

### 1. Create Variable Collections

**Primitives Collection:**
- `blue-500: #3b82f6` (COLOR)
- `gray-900: #111827` (COLOR)
- `spacing-base: 4` (FLOAT)
- `font-size-base: 16` (FLOAT)

**Semantic Collection (with Light/Dark modes):**
- `color-primary: Light=#3b82f6, Dark=#60a5fa` (COLOR)
- `spacing-sm: 8` (FLOAT)
- `text-primary: Light=#111827, Dark=#f9fafb` (COLOR)

### 2. Run the Plugin

1. **Plugins** → **Design System Sync**
2. Enter GitHub details:
   - **GitHub Token**: Your personal access token
   - **Owner**: Your GitHub username
   - **Repo**: `design-system`
   - **Branch**: `main`
3. Click **"🔄 Sync to Code"**

## ✨ What Happens

1. Plugin extracts all variables from your Figma file
2. Pushes `tokens.json` to your GitHub repository
3. GitHub Action automatically generates TypeScript files
4. Your React Native components get updated tokens
5. Storybook shows new values instantly

## 🔧 GitHub Token Setup

1. Go to GitHub → Settings → Developer settings → Personal access tokens
2. Generate new token with `repo` permissions
3. Copy the token (starts with `ghp_`)

## 📁 File Structure

```
figma-plugin/
├── manifest.json    # Plugin configuration
├── code.js         # Main plugin logic
├── ui.html         # Plugin interface
└── README.md       # This file
```

## 🎯 When to Use

Run the plugin when you:
- ✅ Create new design variables
- ✅ Update existing variable values
- ✅ Add new variable collections
- ✅ Change light/dark mode values
- ✅ Modify typography or spacing scales

## 🚫 Don't Run When

- ❌ Just moving components around
- ❌ Changing component layouts (not design tokens)
- ❌ Working on individual component designs

---

**Ready to sync your Scapia Design System variables!** 🎨
