# Design System for React Native

A production-ready, open-source React Native design system with Storybook integration and automated design token synchronization from Figma.

## 🚀 Features

- **Cross-platform**: Works on iOS, Android, and Web
- **TypeScript**: Full type safety with IntelliSense
- **Storybook**: Interactive component documentation and testing
- **Figma Sync**: Automated design token synchronization via Figma Variables API
- **Theme Support**: Light/dark mode with automatic color scheme detection
- **Accessibility**: Built-in accessibility features and VoiceOver/TalkBack support
- **Testing**: Unit tests and visual regression testing with Chromatic

## 📦 Installation

```bash
npm install design-system
# or
yarn add design-system
```

## 🎨 Quick Start

```tsx
import React from 'react';
import { View } from 'react-native';
import { Button, Typography, Heading1 } from 'design-system';

export const MyComponent = () => {
  return (
    <View>
      <Heading1>Welcome to Design System</Heading1>
      <Typography variant="bodyMedium">
        This is a sample component using our design system.
      </Typography>
      <Button variant="primary" onPress={() => console.log('Pressed!')}>
        Get Started
      </Button>
    </View>
  );
};
```

## 🧩 Components

### Typography

```tsx
import { Typography, Heading1, Heading2, BodyMedium, Caption } from 'design-system';

// Using the main Typography component
<Typography variant="h1" color="primary">Heading</Typography>
<Typography variant="bodyMedium" color="secondary">Body text</Typography>

// Using convenience components
<Heading1>Large Title</Heading1>
<Heading2>Section Title</Heading2>
<BodyMedium>Regular content</BodyMedium>
<Caption>Small supporting text</Caption>
```

### Button

```tsx
import { Button } from 'design-system';

// Different variants
<Button variant="primary">Primary Button</Button>
<Button variant="secondary">Secondary Button</Button>
<Button variant="tertiary">Tertiary Button</Button>
<Button variant="ghost">Ghost Button</Button>

// Different sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// States
<Button disabled>Disabled</Button>
<Button loading>Loading...</Button>
```

## 🎨 Design Tokens

The design system uses a comprehensive token system that automatically syncs with Figma:

### Colors

```tsx
import { colors } from 'design-system';

// Primitive colors
colors.primitive.blue500 // '#3b82f6'
colors.primitive.gray900 // '#111827'

// Semantic colors (with light/dark variants)
colors.semantic.primary.light  // '#3b82f6'
colors.semantic.primary.dark   // '#60a5fa'
colors.semantic.text.primary.light // '#111827'
colors.semantic.text.primary.dark  // '#f9fafb'
```

### Spacing

```tsx
import { spacing } from 'design-system';

spacing.xs    // 4px
spacing.sm    // 8px
spacing.md    // 16px
spacing.lg    // 24px
spacing.xl    // 32px
```

### Typography

```tsx
import { typography } from 'design-system';

typography.fontSize.xs     // 12
typography.fontSize.base   // 16
typography.fontSize.xl     // 20
typography.fontWeight.bold // '700'
```

## 🔄 Figma Integration

### Setting up Figma Sync

1. **Create Variables in Figma**:
   - Use Figma Variables (not styles) for design tokens
   - Organize variables into collections (Primitives, Semantic, etc.)
   - Set up light/dark modes for semantic tokens

2. **Install the Figma Plugin**:
   - Open the `figma-plugin` folder in Figma
   - Install the plugin in your Figma file

3. **Configure GitHub Sync**:
   - Get a GitHub Personal Access Token
   - Configure the plugin with your repository details
   - Click "Sync to Code" to push tokens to GitHub

4. **Automatic Updates**:
   - GitHub Action automatically generates TypeScript files
   - Components get new tokens within 2-3 minutes

### Figma Plugin Workflow

```
Figma Variables → Plugin → GitHub → CI/CD → TypeScript → Components
```

## 📚 Storybook

View and test components interactively:

```bash
npm run storybook
```

Open [http://localhost:6006](http://localhost:6006) to see:
- All component variants
- Interactive controls
- Light/dark mode toggle
- Accessibility testing
- Visual regression testing

## 🧪 Testing

```bash
# Run unit tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## 🏗️ Development

### Project Structure

```
design-system/
├── src/
│   ├── tokens/           # Auto-generated design tokens
│   ├── components/       # React Native components
│   ├── styles/          # Shared styling utilities
│   └── index.ts         # Main export
├── .storybook/          # Storybook configuration
├── stories/             # Component stories
├── figma-plugin/        # Figma plugin source
├── scripts/             # Token generation scripts
├── __tests__/           # Test files
└── example/             # Example React Native app
```

### Building

```bash
# Build the library
npm run prepare

# Build Storybook
npm run build-storybook
```

### Adding New Components

1. Create component in `src/components/ComponentName/`
2. Add TypeScript types and props
3. Use design tokens for styling
4. Add Storybook stories
5. Write unit tests
6. Export from `src/components/index.ts`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Update Storybook stories
6. Submit a pull request

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🆘 Support

- 📖 [Documentation](https://github.com/kushal/design-system#readme)
- 🐛 [Issue Tracker](https://github.com/kushal/design-system/issues)
- 💬 [Discussions](https://github.com/kushal/design-system/discussions)

---

Built with ❤️ using React Native, TypeScript, and Storybook.