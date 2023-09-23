import { Text } from './text';
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

const myText = 'Travelling door compliment connection';

describe('Text', () => {
  it('renders Text component', async () => {
    render(<Text font={'normal'} textContent={myText} />);
    const searchText = 'Travelling';

    const text: HTMLElement | null = screen.getByText(searchText, {
      exact: false,
    });

    expect(text).toBeInTheDocument();
  });
});
