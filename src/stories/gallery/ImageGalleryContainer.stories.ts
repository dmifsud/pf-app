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
    {
        imageUrl: 'https://i.ibb.co/mhKDThR/sydney-city.jpg',
        title: 'Sydney, Australia',
        info: '456 Rented props',
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
        imageGalleryProps: [mockImages[0], mockImages[1]],
        title: 'Find your next trip',
        seeAllLink: '#todo-link',
    },
};
