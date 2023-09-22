import React from 'react';
export interface BlockProps {
  title: string;
  content: string;
}

export const UnfoldingBlock: React.FC<BlockProps> = ({ title, content }) => {
  const [isOpen, setOpen] = React.useState(false);

  const handleBlock = () => {
    setOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <>
      <div className="block-text">
        <div className="block-title" onClick={handleBlock}>
          {title}
        </div>
        {isOpen && <div className="block-content">{content}</div>}
      </div>
    </>
  );
};
