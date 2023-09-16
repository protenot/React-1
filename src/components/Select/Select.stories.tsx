import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from "react";
import { Select } from './select';
import { HeaderWithInput } from '../Header/header1.stories';
//import { SelectChangeHandler } from './select';
import { Header } from '../Header/header';
import { Break } from '../Break/break';
import { Image } from '../Image/image';
import { TextWithSelect } from '../Text/text1.stories';
import { UnfoldingBlock } from '../UnfoldingBlock/block.stories';
const Img = require ('../../img/Kittens.jpg');

 /* const options = [
    { value: "", text: "--Choose an option--" },
    { value: "Header", text: "Header" },
    { value: "Text", text: "Text" },
    { value: "Break", text: "Break" },
    { value: "UnfoldingBlock", text: "UnfoldingBlock" },
    { value: "Image", text: "Image" },
    { value: "Nothing", text: "Nothing" },
  ];  */

//type Story = StoryObj<typeof Select>;
export default {
    title: "Component/Select",
    component: Select,
    argTypes: {
      onSelectChange: { action: "selected" },
    },
  } as Meta;
  
  //const Template: Story = () => {
    export const ComponentSelector = () => {
        const [selectedComponents, setSelectedComponents] = useState<string[]>([]);
      
        const onSelectChange = (selectedValue: string) => {
          if (selectedValue === "Nothing") {
            // Если выбрано "Nothing", очистить все выбранные компоненты
            setSelectedComponents([]);
          } else 
          //if (!selectedComponents.includes(selectedValue))
           {
            // Если компонент еще не выбран, добавить его в список
            setSelectedComponents([...selectedComponents, selectedValue]);
          }
        };
        const renderBlock = (blockType: string) => {
          switch (blockType) {
            case "Header":
              return (
                <>
                  <HeaderWithInput value={0} />
                </>
              );
            case "Text":
              return (
                <TextWithSelect />
              );
            case "Break":
              return <Break />;
            case "UnfoldingBlock":
              return <UnfoldingBlock></UnfoldingBlock>;
            case "Image":
              return (
                <Image src={Img} alt={""} width={200} height={300} />
              );
            case "Nothing":
              return <></>;
            default:
              return null;
          }
        };
        return (
          <>
            <Select onSelectChange={onSelectChange}></Select>
            {selectedComponents.map((block, index) => (
              <div key={index}>{renderBlock(block)}</div>
            ))}
          </>
        );

      
      /*   return (
          <>
            <Select onSelectChange={onSelectChange} />
            {selectedComponents.includes("Header") && <HeaderWithInput value={0} />}
            {selectedComponents.includes("Break") && <Break />}
           
            {selectedComponents.includes("Text") && <TextWithSelect />}
            {selectedComponents.includes("UnfoldingBlock") && <UnfoldingBlock />}
            {selectedComponents.includes("Image") && (
              <Image src={Img} alt={""} width={200} height={300} />
            )}
          </>
        ); */
      };