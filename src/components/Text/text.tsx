import React, { useEffect, useState } from 'react';
export interface TextProps {
  font: string;
}
export type FontStyle = 'normal' | 'italic' | 'oblique';

export const Text: React.FC<TextProps> = ({ font }) => {
  const fontToUse: FontStyle = (font as FontStyle) || 'normal';
  const [fontState, setFontState] = useState<FontStyle | undefined>(fontToUse);
  useEffect(() => {
    setFontState(fontToUse);
  }, [font]);

  const textContent: string =
    'Joy prepared poor. Good believing prevent. Amiable admiration meritsresources waiting sight no father hunted plenty alteration mrs welcome nor. Since mutual little over betrayed returned elderly extremity girl wondered entrance herself amiable is behaved interested concluded. Change morning letter uneasy horses attempt sportsman spot we my.';

  return <p style={{ fontStyle: fontState }}>{textContent}</p>;
  //console.log(font-style)
};
