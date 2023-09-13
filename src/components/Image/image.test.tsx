import { Image } from './image';
import '@testing-library/jest-dom';
import { Kittens } from '../../App';
import React from 'react';
import { render, screen } from '@testing-library/react';
describe('Image', () => {
    it('renders Image component',  () => {
      render(<Image src={Kittens} alt="Kittens" width={200} height={300}/>);
      const displayedImage = screen.getByRole("img");
      console.log(displayedImage)
      expect (displayedImage).toHaveAttribute('alt',"Kittens")

      


     
    })
    });