import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
//import Img from './Kittens.jpg';
import { Kittens } from '../../App';
const Img = require ('../../img/Kittens.jpg');
import type { Meta, StoryObj } from '@storybook/react';
import {Image, ImageProps} from './image'


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
 const meta = {
  component: Image,
  title: 'Component/Image',

  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered'
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  //tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
   argTypes: {
    //p: { control: 'black' },
  }, 
} satisfies Meta<ImageProps>;

export default meta;
type Story = StoryObj<ImageProps>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary:Story = {
    
 args:{
    src:Img,
    alt:"Kittens",
        width:200,
        height:300
}}


