import React, { FC } from 'react';
export const Break:FC = () => {
  const hrStyle = {
    borderColor: 'black',
  };
  return <hr className="break" style={hrStyle} />;
};
