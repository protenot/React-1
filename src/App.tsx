import React, { FC } from 'react';
import { Select } from './components/Select/select';
import { BlockRenderer } from './components/BlockRenderer/BlockRenderer';
import { useState } from 'react';

export const App: FC = () => {
  //Состояние для хранения блоков добавленных на страницу
  const [blocks, setBlocks] = useState<string[]>([]);
  // обновляем состояние когда пользователь выбирает блок

  const handleSelectBlock = (selectedValue: string) => {
    if (selectedValue === 'Nothing') {
      // Если выбрано "Nothing", очищаем все блоки
      setBlocks([]);
    } else {
      // В противном случае добавляем выбранный блок к списку
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
