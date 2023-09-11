import React, { useState } from 'react';
type OnInputChange = (inputValue: string) => void;

export const Input = ({ onInputChange }: { onInputChange: OnInputChange }) => {
  // Фиксируем state
  const [inputValue, setInputValue] = useState('');
  //Обработчик ввода
  const handleInputChange = (event: any) => {
    //Присваиваем состояние
    const newValue = event.target.value;
    // Фиксируем новый стейт
    setInputValue(newValue);
    // Callback
    onInputChange(newValue);
  };
  /*  const handleInputClick = (event: any) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  }; */
  return (
    <input
      type="text"
      className="input-value"
      placeholder="Enter digit from 1 to 6"
      onChange={handleInputChange}
      value={inputValue}
      /* onClick={handleInputClick} */
    ></input>
  );
};
