import { useState } from 'react';
import { Text } from './text';
import { SelectTypeText } from '../SelectTypeText/selectText';
import { jsxDecorator } from 'storybook-addon-jsx';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
export const TextWithSelect = () => {
  const [selectedType, setSelectedType] = useState('normal');

  const handleTypeChange = (newType: string) => {
    setSelectedType(newType);
  };
 
  return (
    <>
      <SelectTypeText onSelectTypeChange={handleTypeChange} />
      <Text font={selectedType} />
    </>
  );
};
const meta = {
  title: 'Components/TextWithSelect',
  component: Text,
  decorators: [jsxDecorator],
  tags: ['autodocs'],
} satisfies Meta<typeof TextWithSelect>;
export default meta;
type Story = StoryObj<typeof meta>;
export const LoggedIn: Story = {
  args: {
    font: '1',
  },
};
export const LoggedOut: Story = {
  args: {
    font: '6',
  },
};
