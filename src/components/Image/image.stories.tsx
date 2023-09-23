import Img from '../../img/Kittens.jpg';
import type { Meta, StoryObj } from '@storybook/react';
import { Image, ImageProps } from './image';
 
const meta = {
  component: Image,
  title: 'Component/Image',

  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<ImageProps>;

export default meta;
type Story = StoryObj<ImageProps>;

export const Primary: Story = {
  args: {
    src: Img,
    alt: 'Kittens',
    width: 200,
    height: 300,
  },
};
