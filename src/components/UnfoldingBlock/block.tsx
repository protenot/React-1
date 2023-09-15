import React from "react";

export const UnfoldingBlock: React.FC = () => {
  const [isOpen, setOpen] = React.useState(false);

  const handleBlockOpen:
    | React.MouseEventHandler<HTMLButtonElement>
    | undefined = () => {
    setOpen((prevIsOpen) => !prevIsOpen);
  };

  const blockClassName = `block-text ${isOpen ? "" : "hidden"}`;
  return (
    <>
      <h2 className="block-title">New's Title</h2>
      <p className={blockClassName}>
        Travelling door compliment connection either however principles looking
        maids woman express excuse sweetness. Going distance dearest visited
        contented fine sorry declared though enjoyment give him melancholy
        innate sorry. Gone heart hundred settling newspaper greater numerous
        two. His blushes dare innate passage play position resolving desirous
        scale. Placing might attempt mile.
      </p>
      <button onClick={handleBlockOpen} className="more" type="button">
        {isOpen ? "Close" : "More"}
      </button>
    </>
  );
};
