import React from 'react';
import { Image } from './components/Image/image';
import { Header } from './components/Header/header';
import { Input } from './components/Input/input';
import { Select } from './components/Select/select';
import { Text } from './components/Text/text';
import { SelectTypeText } from './components/SelectTypeText/selectText';
import { Break } from './components/Break/break';
import { HeaderProps } from './components/Header/header';
import { useState } from 'react';
import { UnfoldingBlock } from './components/UnfoldingBlock/block';
export const Kittens = require('./img/Kittens.jpg');
/* export interface AppProps {
    Header: React.ComponentType;
  } */

export const App = () => {
  //Состояние для хранения блоков добавленных на страницу
  const [blocks, setBlocks] = useState<string[]>([]);
  // обновляем состояние когда пользователь выбирает блок

  const handleSelectBlock = (selectedValue: string) => {
    if (selectedValue === 'Nothing') {
      // Если выбрано "Nothing", очищаем все блоки
      setBlocks([]);
    } else {
      // В противном случае добавляем выбранный блок к списку
      setBlocks([...blocks, selectedValue]);
    }
  };
  // Состояние основного селектора
  /*  const [selectedOption, setSelectedOption] = useState('');
  const handleSelectChange = (selectedValue: React.SetStateAction<string>) => {
    setSelectedOption(selectedValue);
  } */ const [inputValue, setInputValue] = useState('');
  const handleInputChange = (newValue: React.SetStateAction<string>) => {
    setInputValue(newValue);
  };
  const [selectedType, setSelectedType] = useState('');
  const handleSelectType = (newTypeValue: React.SetStateAction<string>) => {
    setSelectedType(newTypeValue);
  };
  //Прописываем состояние для статьи
  /*  const [openedBlock, setOpened] = React.useState(null);
  const handleBlockOpen = () => {
    setOpened(openedBlock);
  }; */

  const renderBlock = (blockType: string) => {
    switch (blockType) {
      case 'Header':
        return (
          <>
            <Input onInputChange={handleInputChange}></Input>
            <Header value={parseInt(inputValue)}></Header>
          </>
        );
      case 'Text':
        return (
          <>
            <SelectTypeText
              onSelectTypeChange={handleSelectType}
            ></SelectTypeText>
            <Text font={selectedType}></Text>
          </>
        );
      case 'Break':
        return <Break />;
      case 'UnfoldingBlock':
        return <UnfoldingBlock></UnfoldingBlock>;
      case 'Image':
        return (
          <Image src={Kittens} alt="Kittens" width={200} height={300}></Image>
        );
      case 'Nothing':
        return <></>;
      default:
        return null;
    }
  };
  return (
    <>
      <Select onSelectChange={handleSelectBlock}></Select>
      {blocks.map((block, index) => (
        <div key={index}>{renderBlock(block)}</div>
      ))}
    </>
  );
};
