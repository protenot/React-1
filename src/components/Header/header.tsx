import React, { FC, useState, useEffect } from "react";

export interface HeaderProps {
  value: number;
}

export const Header: React.FC<HeaderProps> = ({ value }) => {
  const [headerState, setHeaderState] = useState<number | null>(null);

  // Используем useEffect для обновления headerState при изменении value
  useEffect(() => {
    setHeaderState(value);
  }, [value]);

  let HeaderElement = null;

  switch (headerState) {
    case null || 1:
      HeaderElement = <h1>This is header h1</h1>;
      break;
    case 2:
      HeaderElement = <h2>This is header h2</h2>;
      break;
    case 3:
      HeaderElement = <h3 className="h3-title">This is header h3</h3>;
      break;
    case 4:
      HeaderElement = <h4>This is header h4</h4>;
      break;
    case 5:
      HeaderElement = <h5>This is header h5</h5>;
      break;
    case 6:
      HeaderElement = <h6>This is header h6</h6>;
      break;
    /* default:
      HeaderElement = null; */
  }

  return HeaderElement;
};
