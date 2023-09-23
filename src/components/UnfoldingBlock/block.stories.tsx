import type { Meta, StoryObj } from '@storybook/react';
import { UnfoldingBlock } from './block';

const meta = {
  title: 'Component/UnfoldingBlock',
  component: UnfoldingBlock,
  tags: ['autodocs'],
  parameters: {
    layout: 'center',
  },
} satisfies Meta<typeof UnfoldingBlock>;

type Story = StoryObj<typeof meta>;

export default meta;
export const LoggedIn: Story = {
  args: {
    title: 'Word',
    content:
      'Disable emitting declarations that have `@internal` in their JSDoc comments.',
  },
};
