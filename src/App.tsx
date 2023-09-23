import React, { FC } from 'react';
import { Select } from './components/Select/select';
import { BlockRenderer } from './components/BlockRenderer/BlockRenderer';
import { useState } from 'react';

export const App: FC = () => {
  const [blocks, setBlocks] = useState<string[]>([]);

  const handleSelectBlock = (selectedValue: string) => {
    if (selectedValue === 'Nothing') {
      setBlocks([]);
    } else {
      setBlocks([...blocks, selectedValue]);
    }
  };

  return (
    <>
      <Select onSelectChange={handleSelectBlock} />
      {blocks.map((block, index) => (
        <div key={index}>{<BlockRenderer blockType={block} />}</div>
      ))}
    </>
  );
};
