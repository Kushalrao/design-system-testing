import type { Meta, StoryObj } from '@storybook/react';
import { StayCard } from '../src/components';
import { View } from 'react-native';

const meta: Meta<typeof StayCard> = {
  title: 'Components/StayCard',
  component: StayCard,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Hotel/property name',
    },
    location: {
      control: 'text',
      description: 'Location subtitle',
    },
    price: {
      control: 'text',
      description: 'Price per night',
    },
    rating: {
      control: { type: 'range', min: 0, max: 5, step: 1 },
      description: 'Star rating',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Hilton New York Fashion District',
    location: 'Miami/ Brickell',
    price: 'Rs 14,282',
    rating: 5,
    moreAmenities: '+ 8 More with Deluxe',
    image: {
      uri: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop',
    },
  },
};

export const WithLogo: Story = {
  args: {
    title: 'Hilton New York Fashion District',
    location: 'Miami/ Brickell',
    price: 'Rs 14,282',
    rating: 5,
    moreAmenities: '+ 8 More with Deluxe',
    image: {
      uri: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop',
    },
    logo: {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Hilton_Hotels_logo.svg/200px-Hilton_Hotels_logo.svg.png',
    },
  },
};

export const DifferentRatings: Story = {
  render: () => (
    <View style={{ gap: 24 }}>
      <StayCard
        title="Luxury Hotel"
        location="Downtown"
        price="Rs 25,000"
        rating={5}
        image={{
          uri: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop',
        }}
      />
      <StayCard
        title="Boutique Hotel"
        location="Uptown"
        price="Rs 15,000"
        rating={4}
        image={{
          uri: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&auto=format&fit=crop',
        }}
      />
      <StayCard
        title="Budget Hotel"
        location="Suburbs"
        price="Rs 8,000"
        rating={3}
        image={{
          uri: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?w=800&auto=format&fit=crop',
        }}
      />
    </View>
  ),
};

export const WithAmenities: Story = {
  args: {
    title: 'Grand Hotel & Spa',
    location: 'Beach Resort',
    price: 'Rs 32,500',
    rating: 5,
    moreAmenities: '+ 12 More with Premium',
    image: {
      uri: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&auto=format&fit=crop',
    },
  },
};

export const Minimal: Story = {
  args: {
    title: 'City Suites',
    location: 'Central Business District',
    price: 'Rs 12,000',
    rating: 4,
    image: {
      uri: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop',
    },
  },
};

