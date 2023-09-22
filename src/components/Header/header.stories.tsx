import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './header';

const meta = {
  title: 'Component/Header',
  //decorators: [jsxDecorator],
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'center',
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: {
    value: 'h1',
    headerTitle: 'This is title for LoggedIn',
  },
};

export const LoggedOut: Story = {
  args: {
    value: 'h6',
    headerTitle: 'This is title for Loggedout',
  },
};

