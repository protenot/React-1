import type { Meta, StoryObj } from '@storybook/react';
//import { useState } from 'react';
import { Select } from './select';
//import React from 'react';
import { jsxDecorator } from 'storybook-addon-jsx';
//import { BlockRenderer } from '../BlockRenderer/BlockRenderer';

const meta = {
  title: 'Component/Select',
  decorators: [jsxDecorator],
  component: Select,
  argTypes: {
    onSelectChange: { action: 'selected' },
  },
} as Meta;
export default meta;
type Story = StoryObj<typeof meta>;
export const LoggedIn: Story = {
  args: {
    value: 'h1',
    headerTitle: '',
  },
}; // поправить потом
/* export const ComponentSelector = () => {
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
 */
