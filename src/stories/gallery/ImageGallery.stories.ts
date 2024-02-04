import { Meta, StoryObj } from '@storybook/react';
import { ImageGallery } from './ImageGallery';

const meta = {
    title: 'Gallery/ImageGallery',
    component: ImageGallery,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof ImageGallery>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        imageUrl: 'https://i.ibb.co/hcwLryT/bali-indonesia.jpg',
        title: 'Bali, Indonesia',
        info: '345 Rented props',
    },
};
