import { UnfoldingBlock } from './block';
import '@testing-library/jest-dom';
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

describe('UnfoldingBlock', () => {
  it('renders UnfoldingBlock component', async () => {
    //   const onSelectChangeMock = jest.fn();
    render(<UnfoldingBlock />);

    screen.logTestingPlaygroundURL();

    const button = screen.getByRole('button', { name: /more/i });
    expect(button).toBeInTheDocument();

    //expect(screen.getByText(/New's Title/i)).toHaveStyle('display: none')

    const block = screen.getByText(/Travelling door/i);
    expect(block).not.toBeVisible;
    fireEvent.click(button);
    expect(block).toBeVisible();
  });
});
