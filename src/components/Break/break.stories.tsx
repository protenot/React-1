import { Break } from './break';
import type { Meta, StoryObj } from '@storybook/react';
//import React from 'react';
import { jsxDecorator } from 'storybook-addon-jsx';

const meta = {
  title: 'Component/Break',
  decorators: [jsxDecorator],
  component: Break,
  tags: ['autodocs'],
  argTypes: {
    borderColor: { control: { type: 'color' } },
  },
} satisfies Meta<typeof Break>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
