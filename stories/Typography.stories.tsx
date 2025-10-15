import type { Meta, StoryObj } from '@storybook/react-native';
import { Typography, Heading1, Heading2, Heading3, BodyMedium, Caption } from '../src/components';

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
  argTypes: {
    variant: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'bodyLarge', 'bodyMedium', 'bodySmall', 'caption'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'error'],
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Typography component provides consistent text styling across the design system.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'This is default typography',
    variant: 'bodyMedium',
    color: 'primary',
  },
};

export const Headings: Story = {
  render: () => (
    <>
      <Heading1>Heading 1 - Large Title</Heading1>
      <Heading2>Heading 2 - Section Title</Heading2>
      <Heading3>Heading 3 - Subsection Title</Heading3>
      <BodyMedium>Body text - Regular content</BodyMedium>
      <Caption>Caption - Small supporting text</Caption>
    </>
  ),
};

export const Colors: Story = {
  render: () => (
    <>
      <Typography variant="bodyMedium" color="primary">Primary text</Typography>
      <Typography variant="bodyMedium" color="secondary">Secondary text</Typography>
      <Typography variant="bodyMedium" color="success">Success text</Typography>
      <Typography variant="bodyMedium" color="warning">Warning text</Typography>
      <Typography variant="bodyMedium" color="error">Error text</Typography>
    </>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <>
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4">Heading 4</Typography>
      <Typography variant="h5">Heading 5</Typography>
      <Typography variant="h6">Heading 6</Typography>
      <Typography variant="bodyLarge">Body Large</Typography>
      <Typography variant="bodyMedium">Body Medium</Typography>
      <Typography variant="bodySmall">Body Small</Typography>
      <Typography variant="caption">Caption</Typography>
    </>
  ),
};
