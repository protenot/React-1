import React, { useState } from 'react';

export type OnInputChange = (inputValue: string) => void;

export interface InputProps {
  onInputChange: OnInputChange;
  placeholderText: string;
}
 
export const Input = ({ onInputChange, placeholderText }: InputProps) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;

    setInputValue(newValue);

    onInputChange(newValue);
  };
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onInputChange(inputValue);
    }
  };
  return (
    <input
      type="text"
      className="input-value"
      placeholder={placeholderText}
      onChange={handleInputChange}
      onKeyDown={handleKeyPress}
      value={inputValue}
    />
  );
};
