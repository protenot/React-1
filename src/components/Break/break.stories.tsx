import { Break } from './break';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Component/Break',
  component: Break,
  tags: ['autodocs'],
  argTypes: {
    borderColor: { control: { type: 'color' } },
  },
} satisfies Meta<typeof Break>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
