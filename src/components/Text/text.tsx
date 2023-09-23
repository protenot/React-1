import React, { useEffect, useState } from 'react';

export interface TextProps {
  font: string;
  textContent: string;
}

export const Text: React.FC<TextProps> = ({ font, textContent }) => {
  const [fontState, setFontState] = useState(font);
  const [textState, setTextState] = useState(textContent);
  useEffect(() => {
    setFontState(font);
    setTextState(textContent);
  }, [font, textState]);

  return (
    <p className="text" style={{ fontStyle: fontState }}>
      {textContent}
    </p>
  );
};
