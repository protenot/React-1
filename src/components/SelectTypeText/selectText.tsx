import { FontStyle } from '../Text/text';
import React, { useState, ChangeEvent } from 'react';

type OnSelectTypeChange = (selectedType: FontStyle) => void;
type SelectTypeProps = {
  onSelectTypeChange: OnSelectTypeChange;
};
export const SelectTypeText:React.FC<SelectTypeProps> = ({
  onSelectTypeChange,
}: {
  onSelectTypeChange: OnSelectTypeChange;
}) => {
  const optionsType = [
   
    { value: 'normal', text: 'normal' },
    { value: 'italic', text: 'italic' },
    { value: 'oblique', text: 'oblique' },
  ];
  // Фиксируем state
  const [selectedType, setSelectedType] = useState('optionsType[0].value');
  //Обработчик select
  const handleSelectType = (event: ChangeEvent<HTMLSelectElement>) => {
    //Присваиваем состояние
    const newTypeValue: FontStyle = event.target.value as FontStyle;
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
      {optionsType.map((option, index) => (
        <option key={index} value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  );
};
