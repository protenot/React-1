import React, { FC } from 'react';
type BreakProps = {
  borderColor?: string;
};

export const Break: FC<BreakProps> = ({ borderColor }) => {
  if (borderColor) {
    return <hr className="break" style={{ borderColor }} />;
  }
  return <hr className="break" style={{ borderColor: 'black' }} />;
};
