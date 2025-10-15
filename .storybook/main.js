/** @type { import('@storybook/react-native').Main } */
const config = {
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-controls',
    '@storybook/addon-actions',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/react-native',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};

export default config;
