import { UnfoldingBlock } from './block';
import '@testing-library/jest-dom';
import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

describe('UnfoldingBlock', () => {
  it('renders UnfoldingBlock component', async () => {
    render(<UnfoldingBlock title={'News'} content={'Many news'} />);
    screen.debug();
    screen.logTestingPlaygroundURL();

    const title = screen.getByText(/news/i);
    expect(title).toBeInTheDocument();

    const blockText = screen.queryByText(/Many news/i);
    expect(blockText).not.toBeInTheDocument();
    fireEvent.click(title);
    await waitFor(async () => {
      const newBlockText = screen.queryByText(/Many news/i);
      expect(newBlockText).toBeInTheDocument();
    });
  });
});
