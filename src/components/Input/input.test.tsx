import { Input } from './input';
import '@testing-library/jest-dom';
import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

describe('Input', () => {
  it('calls onInputChange when input value changes', async () => {
    const onInputChangeMock = jest.fn();
    render(<Input onInputChange={onInputChangeMock} />);

    screen.logTestingPlaygroundURL();
    const inputElement = screen.getByPlaceholderText<HTMLInputElement>(
      'Enter digit from 1 to 6',
    );

    await userEvent.type(inputElement, '2');

    expect(onInputChangeMock).toHaveBeenCalledWith('2');
  });
});
