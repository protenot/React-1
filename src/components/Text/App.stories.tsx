import { App } from '../../App';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Component/App',
  component: App,
  tags: ['autodocs'],
  parameters: {
    layout: 'center',
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: {
    blocks: ['Header', 'Text', 'Break', 'unfoldingBlock', 'Image'],
  },
};

export const LoggedOut: Story = {
  args: {
    option: { control: 'select' },
  },
};
