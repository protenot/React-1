import React, { useState, useCallback } from 'react';

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
