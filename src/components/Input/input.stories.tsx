import type { Meta, StoryObj } from '@storybook/react';
//import React from 'react';
import { Input } from './input';
import { jsxDecorator } from 'storybook-addon-jsx';

const meta = {
  title: 'Component/Input',
  component: Input,
  decorators: [jsxDecorator],
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'center',
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;
 
export const LoggedIn: Story = {
  args: {
    onInputChange() {},
    placeholderText: '118531231231',
  },
};

//export const LoggedOut: Story = {};
/* export const Default: React.FC<HTMLInputElement> = () => (
  <Input
    onInputChange={function (inputValue: string,placeholder:string): void {
      return console.log(`Input value: ${inputValue}`);
    }}
  /> */
//);
