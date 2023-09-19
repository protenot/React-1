import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { SelectTypeText } from './selectText';
import { FontStyle } from '../Text/text';
//import { Select } from '../Select/select';
const meta = {
  title: 'Component/SelectTypeText',
  component: SelectTypeText,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'center',
  },
} satisfies Meta<typeof SelectTypeText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: {
    onSelectTypeChange: (selectedType: string) => {
      console.log(`Selected value: ${selectedType}`);
    },
  },
};

export const LoggedOut: Story = {};
export const Default = () => (
  <SelectTypeText onSelectTypeChange={handleSelectType} />
);
function handleSelectType(selectedType: FontStyle): void {
  selectedType = 'normal';
  console.log(`Selected value: ${selectedType}`);
}
