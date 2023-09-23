import type { Meta, StoryObj } from '@storybook/react';
import { SelectTypeText, Option } from './selectText';
import { optionsType } from '../BlockRenderer/BlockRenderer';

const meta = {
  title: 'Component/SelectTypeText',
  component: SelectTypeText,
  tags: ['autodocs'],
  argTypes: {
    onSelectTypeChange: { action: 'selected' },
  },
  parameters: {
    layout: 'center',
  },
} satisfies Meta<typeof SelectTypeText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: {
    options: optionsType as Option[],
    onSelectTypeChange: (selectedType: string) => {
      console.log(`Selected value: ${selectedType}`);
    },
  },
};

export const LoggedOut: Story = {
  args: {
    options: optionsType as Option[],
    onSelectTypeChange: (selectedType: string) => {
      console.log(`Selected value: ${selectedType}`);
    },
  },
};
