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
  const [selectedType, setSelectedType] = useState('normal');

  const handleSelectType = (event: ChangeEvent<HTMLSelectElement>) => {
    const newTypeValue = event.target.value;

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
