import { Input } from './input';
import '@testing-library/jest-dom';
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

const onInputChangeMock = jest.fn();
describe('Input', () => {
  it('should render with placeholder text', async () => {
    const onInputChangeMock = jest.fn();

    render(
      <Input
        onInputChange={onInputChangeMock}
        placeholderText="Enter your title"
      />,
    );
    screen.logTestingPlaygroundURL();

    const inputElement =
      screen.getByPlaceholderText<HTMLInputElement>('Enter your title');
    expect(inputElement).toBeInTheDocument();
  });

  it('should update input value when changed', () => {
    render(
      <Input
        onInputChange={onInputChangeMock}
        placeholderText="Test Placeholder"
      />,
    );

    const inputElement: HTMLInputElement =
      screen.getByPlaceholderText('Test Placeholder');
    fireEvent.change(inputElement, { target: { value: 'New Value' } });

    expect(inputElement.value).toBe('New Value');
  });

  it('should call onInputChange when Enter key is pressed', () => {
    const { getByPlaceholderText } = render(
      <Input
        onInputChange={onInputChangeMock}
        placeholderText="Test Placeholder"
      />,
    );

    const inputElement = getByPlaceholderText('Test Placeholder');
    fireEvent.change(inputElement, { target: { value: 'New Value' } });
    fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' });

    expect(onInputChangeMock).toHaveBeenCalledWith('New Value');
  });
});
