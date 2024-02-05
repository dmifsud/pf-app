import { Meta, StoryObj } from '@storybook/react';
import { ImageGalleryContainer } from './ImageGalleryContainer';

const meta = {
    title: 'Gallery/ImageGalleryContainer',
    component: ImageGalleryContainer,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof ImageGalleryContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockImages = [
    {
        imageUrl: 'https://i.ibb.co/hcwLryT/bali-indonesia.jpg',
        title: 'Bali, Indonesia',
        info: '345 Rented props',
    },
    {
        imageUrl: 'https://i.ibb.co/vZt1WZS/tokyo-city.jpg',
        title: 'Tokyo, Japan',
        info: '123 Rented props',
    },
];

export const Default: Story = {
    args: {
        imageGalleryProps: mockImages,
    },
};

export const WithTitle: Story = {
    args: {
        imageGalleryProps: mockImages,
        title: 'Find your next trip',
    },
};

export const WithTitleAndLink: Story = {
    args: {
        imageGalleryProps: mockImages,
        title: 'Find your next trip',
        seeAllLink: '#todo-link',
    },
};

export const OddNumber: Story = {
    args: {
        imageGalleryProps: [
            ...mockImages,
            {
                imageUrl: 'https://i.ibb.co/mhKDThR/sydney-city.jpg',
                title: 'Sydney, Australia',
                info: '456 Rented props',
            },
        ],
        title: 'Find your next trip',
        seeAllLink: '#todo-link',
    },
};

const horizontalImages = [
    {
        title: 'Outdoor living',
        imageUrl: 'https://picsum.photos/600/400.jpg',
    },
    {
        title: 'Online events',
        imageUrl: 'https://picsum.photos/500/500.jpg',
    },
    {
        title: 'Online events',
        imageUrl: 'https://picsum.photos/500/500.jpg',
    },
];

export const HorizontalExample: Story = {
    args: {
        imageGalleryProps: horizontalImages,
        title: 'Explore by living style',
        variant: 'horizontal',
    },
};
