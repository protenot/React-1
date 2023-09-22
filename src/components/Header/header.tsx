import React, { useState, useEffect } from 'react';

export interface HeaderProps {
  value: string;
  headerTitle: string;
}

export const Header: React.FC<HeaderProps> = ({ value, headerTitle }) => {
  const [selectedType, setSelectedType] = useState<string>('');
  const [headerTitleState, setHeaderTitleState] = useState(' ');
  // Используем useEffect для обновления headerState при изменении value
  useEffect(() => {
    setSelectedType(value);
    setHeaderTitleState(headerTitle);
  }, [selectedType, headerTitleState]);

  /*  useEffect(() => {
    setHeaderTitleState(headerTitle);
  }, [selectedType]); */

  switch (value) {
    case 'h1':
      return <h1>{headerTitle}</h1>;

    case 'h2':
      return <h2>{headerTitle}</h2>;

    case 'h3':
      return <h3>{headerTitle}</h3>;

    case 'h4':
      return <h4>{headerTitle}</h4>;

    case 'h5':
      return <h5>{headerTitle}</h5>;

    case 'h6':
      return <h6>{headerTitle}</h6>;

    default:
      return null;
  }
};
