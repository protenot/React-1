import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

const container: HTMLElement | null = document.getElementById('root');
const root = createRoot(container as HTMLElement);

if (container) {
  root.render(<App />);
} else {
  console.error('Container element not found');
}
