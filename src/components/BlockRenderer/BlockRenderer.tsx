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
const titleBlock = 'What\'s News';
const blockText =
  'Travelling door compliment connection either however principles looking maids woman express excuse sweetness. Going distance dearest visited contented fine sorry declared though enjoyment give him melancholy innate sorry. Gone heart hundred settling newspaper greater numerous two. His blushes dare innate passage play position resolving desirous scale. Placing might attempt mile.';

const optionsTitle = [
  { value: '', text: '--Choose type--' },
  { value: 'h1', text: 'h1' },
  { value: 'h2', text: 'h2' },
  { value: 'h3', text: 'h3' },
  { value: 'h4', text: 'h4' },
  { value: 'h5', text: 'h5' },
  { value: 'h6', text: 'h6' },
];
export const optionsType = [
  { value: 'normal', text: 'normal' },
  { value: 'italic', text: 'italic' },
  { value: 'oblique', text: 'oblique' },
];

export const BlockRenderer: React.FC<BlockRendererProps> = ({ blockType }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [selectedType, setSelectedType] = useState<string>('normal');

  switch (blockType) {
    case 'Header':
      return (
        <>
          <SelectTypeText
            onSelectTypeChange={setSelectedType}
            options={optionsTitle}
          />
          <Input
            onInputChange={setInputValue}
            placeholderText='"Enter your title"'
          />

          <Header value={selectedType} headerTitle={inputValue} />
        </>
      );
    case 'Text':
      return (
        <>
          <SelectTypeText
            onSelectTypeChange={setSelectedType}
            options={optionsType}
          />
          <Input
            onInputChange={setInputValue}
            placeholderText="Enter your text"
          />
          <Text font={selectedType} textContent={inputValue} />
        </>
      );
    case 'Break':
      return <Break />;
    case 'UnfoldingBlock':
      return <UnfoldingBlock title={titleBlock} content={blockText} />;
    case 'Image':
      return <Image src={Img} alt="Kittens" width={200} height={300} />;

    default:
      return null;
  }
};
