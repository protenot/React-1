import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from "react";
import { Select } from './select';
import { SelectChangeHandler } from './select';
import { Header } from '../Header/header';
import { Break } from '../Break/break';
import { Image } from '../Image/image';
import { Input } from '../Input/input';
const Img = require ('../../img/Kittens.jpg');
/* const meta = {
  title: 'Component/Select',
  component: Select,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'center',
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: {
    onSelectChange:(selectedValue:string)=>{
        console.log(`Selected value: ${selectedValue}`)
    }
  },
};

export const LoggedOut: Story = {};
 */
type Story = StoryObj<typeof Select>;
export default {
    title: "Component/Select",
    component: Select,
    argTypes: {
      onSelectChange: { action: "selected" },
    },
  } as Meta;
  
  //const Template: Story = () => {
  export const ComponentSelector =()=>{  
  const [selectedComponent, setSelectedComponent] = useState("Header");
  
    const onSelectChange = (selectedValue: React.SetStateAction<string>) => {
      setSelectedComponent(selectedValue);
    };
  
    return (
      <>
        <Select onSelectChange={onSelectChange} />
        {selectedComponent === "Header" && <Header value={1}  />}
        {selectedComponent === "Break" && <Break/>}
        {selectedComponent === "Image" && <Image src={Img} alt={''} width={200} height={300} />}
        {/* Добавьте другие компоненты здесь */}
      </>
    );
  };
  
  //export const ComponentSelector = Template.bind({});