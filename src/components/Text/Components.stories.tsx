import { useState } from 'react';
import { BlockRenderer } from '../BlockRenderer/BlockRenderer';
import { Select } from '../Select/select';

import { jsxDecorator } from 'storybook-addon-jsx';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

export const ComponentsSelector = () => {
  const [selectedComponents, setSelectedComponents] = useState<string[]>([]);

  const onSelectChange = (selectedValue: string) => {
    if (selectedValue === 'Nothing') {
      setSelectedComponents([]);
    } else {
      setSelectedComponents([...selectedComponents, selectedValue]);
    }
  };

  return (
    <>
      <Select onSelectChange={onSelectChange} />
      {selectedComponents.map((block, index) => (
        <div key={index}>{<BlockRenderer blockType={block} />}</div>
      ))}
    </>
  );
};
export default {
  title: 'Components/ComponentsSelector',
  component: ComponentsSelector,
  decorators: [jsxDecorator],
  tags: ['autodocs'],
  argTypes: {
    onSelectChange: { action: 'selected' },
  },
} satisfies Meta<typeof ComponentsSelector>;
//export meta;
type Story = StoryObj<typeof ComponentsSelector>;
export const LoggedIn: Story = {
  args: {
    font: '1',
  },
};

/* export const TextWithSelect = () => {
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
}; */
