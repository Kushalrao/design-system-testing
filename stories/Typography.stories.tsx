import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from '../src/components';
import { View } from 'react-native';

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'body', 'bodyLarge', 'caption'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'custom'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'body',
    color: 'primary',
    children: 'Default Typography Component',
  },
};

export const Headings: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
    </View>
  ),
};

export const BodyText: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <Typography variant="bodyLarge">Large Body Text</Typography>
      <Typography variant="body">Regular Body Text</Typography>
      <Typography variant="caption">Caption Text</Typography>
    </View>
  ),
};

export const Colors: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <Typography variant="body" color="primary">Primary text</Typography>
      <Typography variant="body" color="secondary">Secondary text</Typography>
      <Typography variant="body" customColor="#ff0000">Custom color text</Typography>
    </View>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="bodyLarge">Body Large</Typography>
      <Typography variant="body">Body</Typography>
      <Typography variant="caption">Caption</Typography>
    </View>
  ),
};

export const CustomStyling: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <Typography variant="h1" style={{ fontStyle: 'italic' }}>Italic Heading</Typography>
      <Typography variant="body" style={{ textDecorationLine: 'underline' }}>Underlined Text</Typography>
      <Typography variant="body" style={{ textAlign: 'center' }}>Centered Text</Typography>
    </View>
  ),
};
