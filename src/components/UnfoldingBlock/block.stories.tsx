import React, { useState, useCallback } from 'react';
//import { UnfoldingBlock } from './block';
//import {}

/* 
const meta = {
    title: 'Component/UnfoldingBlock',
    component: UnfoldingBlock,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
      // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'center',
    },
  } satisfies Meta<typeof UnfoldingBlock>;
  
  export default meta;
  type Story = StoryObj<typeof meta>;
  
  export const LoggedIn: Story = {
    args: {
      
      
    },
  };
   */
//export const LoggedOut: Story = {};

export const UnfoldingBlock: React.FC = () => {
  const [isOpen, setOpen] = useState(false);

  const handleBlockOpen = useCallback(() => {
    setOpen((prevIsOpen) => !prevIsOpen);
  }, []);

  const blockStyle = {
    display: isOpen ? 'block' : 'none',
  };
  return (
    <>
      <h2 className="block-title">New's Title</h2>
      <p style={blockStyle} className="block-text">
        Travelling door compliment connection either however principles looking
        maids woman express excuse sweetness. Going distance dearest visited
        contented fine sorry declared though enjoyment give him melancholy
        innate sorry. Gone heart hundred settling newspaper greater numerous
        two. His blushes dare innate passage play position resolving desirous
        scale. Placing might attempt mile.
      </p>
      <button onClick={handleBlockOpen} className="more" type="button">
        {isOpen ? 'Close' : 'More'}
      </button>
    </>
  );
};
export default {
  title: 'Component/UnfoldingBlock',
  component: UnfoldingBlock,
};
