import React, { useState } from 'react';
import { Input } from '../Input/input';
import { Header } from '../Header/header';
import { SelectTypeText } from '../SelectTypeText/selectText';
import { Text } from '../Text/text';
import { Break } from '../Break/break';
import { UnfoldingBlock } from '../UnfoldingBlock/block';
import { Image } from '../Image/image';
import Img from '../../img/Kittens.jpg';

type BlockRendererProps = {
  blockType: string;
};

export const BlockRenderer: React.FC<BlockRendererProps> = ({ blockType }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [selectedType, setSelectedType] = useState<string>('normal');

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const handleSelectType = (value: string) => {
    setSelectedType(value);
  };

  switch (blockType) {
    case 'Header':
      return (
        <>
          <Input onInputChange={handleInputChange} />
          <Header value={parseInt(inputValue)} />
        </>
      );
    case 'Text':
      return (
        <>
          <SelectTypeText onSelectTypeChange={handleSelectType} />
          <Text font={selectedType} />
        </>
      );
    case 'Break':
      return <Break />;
    case 'UnfoldingBlock':
      return <UnfoldingBlock />;
    case 'Image':
      return <Image src={Img} alt="Kittens" width={200} height={300} />;
    case 'Nothing':
      return null;
    default:
      return null;
  }
};
