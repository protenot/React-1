import { Break } from './break';
import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
describe('Break', () => {
  it('renders Break component', () => {
    render(<Break />);
    screen.debug();
    screen.logTestingPlaygroundURL();
    const test = screen.getByRole('generic');
    expect(test as HTMLElement).toBeInTheDocument();
  });
});
