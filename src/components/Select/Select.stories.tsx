import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './select';
import { options } from './select';
const meta = {
  title: 'Component/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    onSelectChange: { action: 'selected' },
  },
} as Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: {
    onSelectChange: { action: 'selected' },
  },
};
export const LoggedOut: Story = {
  args: {
    onSelectChange: { action: options[2].value },
  },
};
