import { Select } from './select';
import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Select', () => {
  it('renders Select component', async () => {
    const onSelectChangeMock = jest.fn();
    render(<Select onSelectChange={onSelectChangeMock} />);

    screen.logTestingPlaygroundURL();

    const select = screen.getByRole('combobox', {
      name: /select what do you want to see/i,
    });
    expect(select).toBeInTheDocument();
    expect;
    const break1 = screen.getByRole('option', { name: /break/i });

    expect(break1).toBeInTheDocument();

    const image = screen.getByRole('option', { name: /image/i });

    expect(image).toBeInTheDocument();

    await userEvent.selectOptions(select, 'Break');
    expect(onSelectChangeMock).toHaveBeenCalledWith('Break');
  });
});
