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
  const [selectedOption, setSelectedOption] = useState('');
  const handleSelectChange = (selectedValue: React.SetStateAction<string>) => {
    setSelectedOption(selectedValue);
  };
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (newValue: React.SetStateAction<string>) => {
    setInputValue(newValue);
  };
  const [selectedType, setSelectedType] = useState('');
  const handleSelectType = (newTypeValue: React.SetStateAction<string>) => {
    setSelectedType(newTypeValue);
  };
  switch (selectedOption) {
    case 'Header':
      return (
        <>
          <Select onSelectChange={handleSelectChange}></Select>
          <Input onInputChange={handleInputChange}></Input>
          <Header value={parseInt(inputValue)}></Header>
        </>
      );
    case 'Text':
      return (
        <>
          <Select onSelectChange={handleSelectChange}></Select>
          <Input onInputChange={handleInputChange}></Input>
          <Header value={parseInt(inputValue)}></Header>
          <SelectTypeText
            onSelectTypeChange={handleSelectType}
          ></SelectTypeText>
          <Text font={selectedType}></Text>
        </>
      );
    case 'Break':
      return (
        <>
          <Select onSelectChange={handleSelectChange}></Select>
          <Input onInputChange={handleInputChange}></Input>
          <Header value={parseInt(inputValue)}></Header>
          <SelectTypeText
            onSelectTypeChange={handleSelectType}
          ></SelectTypeText>
          <Text font={selectedType}></Text>
          <Break />
        </>
      );
  }
  return (
    <>
      <Select onSelectChange={handleSelectChange}></Select>
    </>
  );
};
