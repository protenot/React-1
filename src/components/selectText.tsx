import { type } from 'os';
import { FontStyle } from './text';
import React, { useState } from 'react';

type OnSelectTypeChange = (selectedType: FontStyle) => void;

export const SelectTypeText = ({
  onSelectTypeChange,
}: {
  onSelectTypeChange: OnSelectTypeChange;
}) => {
  const optionsType = [
    // { value: '', text: '' },
    { value: 'normal', text: 'normal' },
    { value: 'italic', text: 'italic' },
    { value: 'oblique', text: 'oblique' },
  ];
  // Фиксируем state
  const [selectedType, setSelectedType] = useState('optionsType[0].value');
  //Обработчик select
  const handleSelectType = (event: any) => {
    //Присваиваем состояние
    const newTypeValue: FontStyle = event.target.value;
    // Фиксируем новый стейт
    setSelectedType(newTypeValue);
    onSelectTypeChange(newTypeValue);
  };
  return (
    <select
      className="select-text"
      value={selectedType}
      onChange={handleSelectType}
    >
      {optionsType.map((option) => (
        <option key={option.value} value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  );
};
