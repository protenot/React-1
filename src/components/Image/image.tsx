import React from 'react';

export interface ImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const Image: React.FC<ImageProps> = ({ ...props }) => <img {...props} />;
