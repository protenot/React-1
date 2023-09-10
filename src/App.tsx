import React from 'react';
import { Header } from './components/header';
import { Input } from './components/input';
import { Select } from './components/select';
import { HeaderProps } from './components/header';
import { useState } from 'react';
/* export interface AppProps {
    Header: React.ComponentType;
  } */

export const App = () => {
  // useState(option)
  //  console.log(HeaderElement)
  //return<Input onInputChange={handleInputChange}></Input>

  const [selectedOption, setSelectedOption] = useState('');
  const handleSelectChange = (selectedValue: React.SetStateAction<string>) => {
    setSelectedOption(selectedValue);
  };
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (newValue: React.SetStateAction<string>) => {
    setInputValue(newValue);
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
  }
  return (
    <>
      <Select onSelectChange={handleSelectChange}></Select>
    </>
  );
};
