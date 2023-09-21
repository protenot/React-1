import React, { useState, useEffect } from 'react';

export interface HeaderProps {
  value: number;
}

export const Header: React.FC<HeaderProps> = ({ value }) => {
  const [headerState, setHeaderState] = useState<number | null>(null);

  // Используем useEffect для обновления headerState при изменении value
  useEffect(() => {
    setHeaderState(value);
  }, [value]);

  switch (headerState) {
    case null || 1:
      return <h1>This is header h1</h1>;

    case 2:
      return <h2>This is header h2</h2>;

    case 3:
      return <h3 className="h3-title">This is header h3</h3>;

    case 4:
      return <h4>This is header h4</h4>;

    case 5:
      return <h5>This is header h5</h5>;

    case 6:
      return <h6>This is header h6</h6>;

    default:
      return null;
  }
};
