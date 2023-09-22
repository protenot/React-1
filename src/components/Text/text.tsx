import React, { useEffect, useState } from 'react';

export interface TextProps {
  font: string;
  textContent: string;
}

//const textContent: string =
//'Joy prepared poor. Good believing prevent. Amiable admiration meritsresources waiting sight no father hunted plenty alteration mrs welcome nor. Since mutual little over betrayed returned elderly extremity girl wondered entrance herself amiable is behaved interested concluded. Change morning letter uneasy horses attempt sportsman spot we my.';

export const Text: React.FC<TextProps> = ({ font, textContent }) => {
  const [fontState, setFontState] = useState(font);
  const [textState, setTextState] = useState(textContent);
  useEffect(() => {
    setFontState(font);
    setTextState(textContent);
  }, [font, textState]);
  console.log(fontState);
  /*  useEffect(() => {
    setTextState(textContent);
  }, [textState]); */

  return (
    <p className="text" style={{ fontStyle: fontState }}>
      {textContent}
    </p>
  );
};
