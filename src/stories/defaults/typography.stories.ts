import type { Meta, StoryObj } from '@storybook/react';
import { TypographyExample } from './TypographyExample';

const meta = {
    title: 'Defaults/Typography',
    component: TypographyExample,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
} as Meta<typeof TypographyExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Heading: Story = {
    args: {
        children: 'Heading',
    },
};
