import React from 'react';
import { Header } from './components/header';
import { Input } from './components/input';
import { Select } from './components/select';
import { Text } from './components/text';
import { SelectTypeText } from './components/selectText';
import { Break } from './components/break';
import { HeaderProps } from './components/header';
import { useState } from 'react';
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
  /* const [selectedOption, setSelectedOption] = useState('');
  const handleSelectChange = (selectedValue: React.SetStateAction<string>) => {
    setSelectedOption(selectedValue);
  }; */
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (newValue: React.SetStateAction<string>) => {
    setInputValue(newValue);
  };
  const [selectedType, setSelectedType] = useState('');
  const handleSelectType = (newTypeValue: React.SetStateAction<string>) => {
    setSelectedType(newTypeValue);
  };

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
        case "Nothing":
            return <></>
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
