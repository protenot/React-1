import React, { useState, ChangeEvent } from 'react';

type OnSelectTypeChange = (selectedType: string) => void;

export type Option = {
  value: string;
  text: string;
};

type SelectTypeProps = {
  onSelectTypeChange: OnSelectTypeChange;
  options: Option[];
};

export const SelectTypeText: React.FC<SelectTypeProps> = ({
  onSelectTypeChange,
  options,
}: SelectTypeProps) => {
  // Фиксируем state
  const [selectedType, setSelectedType] = useState('normal');
  //Обработчик select
  const handleSelectType = (event: ChangeEvent<HTMLSelectElement>) => {
    //Присваиваем состояние
    const newTypeValue = event.target.value;
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
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  );
};
