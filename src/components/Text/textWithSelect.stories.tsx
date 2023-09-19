import React, { useState } from 'react';
import { Text } from './text';
import { SelectTypeText } from '../SelectTypeText/selectText';
import { jsxDecorator } from 'storybook-addon-jsx';
export default {
  title: 'Components/TextWithSelect',
  component: Text,
  decorators: [jsxDecorator],
};

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
