import React from "react";

export const Header = ({ text, value }) => {
  let HeaderElement = null;

  switch (value) {
    case 1:
      HeaderElement = <h1>{text}</h1>;
      break;
    case 2:
      HeaderElement = <h2>{text}</h2>;
      break;
    case 3:
      HeaderElement = <h3>{text}</h3>;
      break;
    case 4:
      HeaderElement = <h4>{text}</h4>;
      break;
    case 5:
      HeaderElement = <h5>{text}</h5>;
      break;
    case 6:
      HeaderElement = <h6>{text}</h6>;
      break;
    default:
      HeaderElement = null;
  }

  return HeaderElement;
};
