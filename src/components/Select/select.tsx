import React from 'react';
type SelectChangeHandler = (selectedValue: string) => void;
type SelectProps = {
  onSelectChange: SelectChangeHandler;
};

const options = [
  { value: '', text: '--Choose an option--' },
  { value: 'Header', text: 'Header' },
  { value: 'Text', text: 'Text' },
  { value: 'Break', text: 'Break' },
  { value: 'UnfoldingBlock', text: 'UnfoldingBlock' },
  { value: 'Image', text: 'Image' },
  { value: 'Nothing', text: 'Nothing' },
];
export const Select: React.FC<SelectProps> = ({
  onSelectChange,
}: {
  onSelectChange: SelectChangeHandler;
}) => {
  const [selected, setSelected] = React.useState(options[0].value);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newSelectValue = event.target.value;
    setSelected(newSelectValue);
    onSelectChange(newSelectValue);
  };
  return (
    <label>
      Select what do you want to see
      <select
        className="select-options"
        value={selected}
        onChange={handleChange}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </label>
  );
};
