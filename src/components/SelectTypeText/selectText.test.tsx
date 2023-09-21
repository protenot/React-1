import { SelectTypeText } from './selectText';
import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('SelectTypeText', () => {
  it('renders SelectType component', async () => {
    const onSelectChangeMock = jest.fn();

    render(<SelectTypeText onSelectTypeChange={onSelectChangeMock} />);

    screen.logTestingPlaygroundURL();

    const mySelect = screen.getByRole('combobox');
    expect(mySelect).toBeInTheDocument();

    await userEvent.selectOptions(mySelect, 'italic');
    expect(onSelectChangeMock).toHaveBeenCalledWith('italic');
  });
});
