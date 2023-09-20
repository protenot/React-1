import type { Meta } from '@storybook/react';
import { useState } from 'react';
import { Select } from './select';
import React from 'react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { BlockRenderer } from '../BlockRenderer/BlockRenderer';

export default {
  title: 'Component/Select',
  decorators: [jsxDecorator],
  component: Select,
  argTypes: {
    onSelectChange: { action: 'selected' },
  },
} as Meta;

export const ComponentSelector = () => {
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
      <Select onSelectChange={onSelectChange}></Select>
      {selectedComponents.map((block, index) => (
        <div key={index}>
          {<BlockRenderer blockType={block}></BlockRenderer>}
        </div>
      ))}
    </>
  );
};
