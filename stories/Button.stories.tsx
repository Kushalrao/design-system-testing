import type { Meta, StoryObj } from '@storybook/react-native';
import { Button } from '../src/components';
import { View } from 'react-native';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: 'boolean',
    },
    loading: {
      control: 'boolean',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Button component provides consistent button styling across the design system.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'md',
    disabled: false,
    loading: false,
  },
};

export const Variants: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <Button variant="primary">Primary Button</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Button variant="tertiary">Tertiary Button</Button>
      <Button variant="ghost">Ghost Button</Button>
    </View>
  ),
};

export const Sizes: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <Button size="sm">Small Button</Button>
      <Button size="md">Medium Button</Button>
      <Button size="lg">Large Button</Button>
    </View>
  ),
};

export const States: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <Button>Normal Button</Button>
      <Button disabled>Disabled Button</Button>
      <Button loading>Loading Button</Button>
    </View>
  ),
};

export const Interactive: Story = {
  args: {
    children: 'Click me!',
    variant: 'primary',
    onPress: () => console.log('Button pressed!'),
  },
};
