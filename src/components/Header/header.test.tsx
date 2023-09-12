import { Header } from './header';
import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';

describe('Header', () => {
    it('renders Header component', async () => {
      render(<Header value={1}/>);
      screen.debug();
      screen.logTestingPlaygroundURL();
       const header1 = screen.getByRole('heading')
      expect(header1).toBeInTheDocument()
      expect (await screen.findByText(/header/)).toBeInTheDocument()  
      render(<Header value={2}/>);
      const header2 = screen.getAllByRole('heading')
      expect(header2).toHaveLength(2);
      render(<Header value={3}/>);
      const header3 = screen.getAllByRole('heading')
      expect(header3).toHaveLength(3);


     

    });
  
  });
  