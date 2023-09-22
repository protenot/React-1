import { SelectTypeText } from './selectText';
import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const optionsType = [
  { value: 'normal', text: 'normal' },
  { value: 'italic', text: 'italic' },
  { value: 'oblique', text: 'oblique' },
];

describe('SelectTypeText', () => {
  it('renders SelectType component', async () => {
    const onSelectChangeMock = jest.fn();

    render(
      <SelectTypeText
        onSelectTypeChange={onSelectChangeMock}
        options={optionsType}
      />,
    );

    const mySelect = screen.getByRole('combobox');
    expect(mySelect).toBeInTheDocument();

    await userEvent.selectOptions(mySelect, 'italic');
    expect(onSelectChangeMock).toHaveBeenCalledWith('italic');
  });
});
