import React from 'react';
type SelectChangeHandler = (selectedValue: string) => void;

export const Select = ({
  onSelectChange,
}: {
  onSelectChange: SelectChangeHandler;
}) => {
  const options = [
    { value: '', text: '--Choose an option--' },
    { value: 'Header', text: 'Header' },
    { value: 'Text', text: 'Text' },
    { value: 'Break', text: 'Break' },
  ];
  const [selected, setSelected] = React.useState(options[0].value);

  const handleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    console.log(event.target.value);
    const newSelectValue = event.target.value;
    setSelected(newSelectValue);
    onSelectChange(newSelectValue as string);
  };
  return (
    <>
      {/* <h1 className="title">Select what do you want to see</h1> */}
      <label>
        Select what do you want to see
        <select
          className="select-options"
          value={selected}
          onChange={handleChange}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
      </label>
    </>
  );
};
