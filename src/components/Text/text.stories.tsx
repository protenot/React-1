import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from "react";
import { Text } from './text';
//import {}


const meta = {
    title: 'Component/Text',
    component: Text,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
      // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'center',
    },
  } satisfies Meta<typeof Text>;
  
  export default meta;
  type Story = StoryObj<typeof meta>;
  
  export const LoggedIn: Story = {
    args: {
      font:"italic"
      
    },
  };
  
  //export const LoggedOut: Story = {};
   