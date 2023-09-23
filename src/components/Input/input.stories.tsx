import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './input';

const meta = {
  title: 'Component/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'center',
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: {
    onInputChange() {},
    placeholderText: '118531231231',
  },
};

export const LoggedOut: Story = {
  args: {
    onInputChange() {},
    placeholderText: '',
  },
};
