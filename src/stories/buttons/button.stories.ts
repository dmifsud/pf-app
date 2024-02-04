import { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
    title: 'Buttons/Button',
    component: Button,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        variant: 'primary',
        label: 'Log in',
    },
};

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        label: 'Sign up',
    },
};
