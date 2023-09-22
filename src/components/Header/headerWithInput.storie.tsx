import React, { useState, useEffect } from 'react';
import { Header } from './header';
import { jsxDecorator } from 'storybook-addon-jsx';
import { Input } from '../Input/input';
import { HeaderProps } from './header';

// Определяем структуру истории
export default {
  title: 'Components/HeaderWithInput',
  decorators: [jsxDecorator],
  component: Header,
};

// Создаем комбинированную историю
export const HeaderWithInput: React.FC<HeaderProps> = ({ value }) => {
  const [headerState, setHeaderState] = useState<number | null>(null);
  const [inputValue, setInputValue] = useState<string>('');
  // Функция для обработки изменения типа текста
  useEffect(() => {
    setHeaderState(value);
  }, [headerState]);

  if (!value) {
    return (
      <>
        <Input onInputChange={setInputValue} />
        <Header value={parseInt(inputValue)}></Header>
      </>
    );
  }
};
