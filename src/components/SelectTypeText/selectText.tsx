import React, { useState, ChangeEvent } from 'react';

type OnSelectTypeChange = (selectedType: string) => void;
type SelectTypeProps = {
  onSelectTypeChange: OnSelectTypeChange;
};

const optionsType = [
  { value: 'normal', text: 'normal' },
  { value: 'italic', text: 'italic' },
  { value: 'oblique', text: 'oblique' },
];
export const SelectTypeText: React.FC<SelectTypeProps> = ({
  onSelectTypeChange,
}: {
  onSelectTypeChange: OnSelectTypeChange;
}) => {
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
      {optionsType.map((option, index) => (
        <option key={index} value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  );
};
