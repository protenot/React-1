import { Header } from './header';
import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';

describe('Header', () => {
  it('renders Header component', async () => {
    render(<Header value={'h1'} headerTitle="Hello!" />);

    screen.logTestingPlaygroundURL();
    const header1 = screen.getByRole('heading');
    expect(header1).toBeInTheDocument();
    expect(await screen.findByText(/Hello/)).toBeInTheDocument();
    render(<Header value={'h2'} headerTitle="Hello murzik!" />);
    const header2 = screen.getAllByRole('heading');
    expect(header2).toHaveLength(2);
    render(<Header value={'h3'} headerTitle="Hello Friday!" />);
    const header3 = screen.getAllByRole('heading');
    expect(header3).toHaveLength(3);
    render(<Header value={'h4'} headerTitle="Hello world!" />);
    const header4 = screen.getByRole('heading', { name: /Hello world!/i });
    expect(header4).toBeInTheDocument();
    render(<Header value={'h5'} headerTitle="Hello1234!" />);
    const header5 = screen.getByRole('heading', { name: /Hello1234!/i });
    expect(header5).toBeInTheDocument();
    render(<Header value={'h6'} headerTitle="Hello5678!" />);
    const header6 = screen.getByRole('heading', { name: /Hello5678!/i });
    expect(header6).toBeInTheDocument();
  });
});
