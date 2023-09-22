import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Header } from './header';
import { jsxDecorator } from 'storybook-addon-jsx';
const meta = {
  title: 'Component/Header',
  decorators: [jsxDecorator],
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'center',
  },
} satisfies Meta<typeof Header>;
 
export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: {
    value: 1,
  },
};

export const LoggedOut: Story = {
  args: {
    value: 6,
  },
};
export const Default: React.FC<HTMLHeadingElement> = () => (
  <Header value={3}></Header>
);
