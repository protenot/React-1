import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { Header } from './components/Header/header';

const container: HTMLElement | null = document.getElementById('root');
const root = createRoot(container as HTMLElement);

if (container) {
  const Props = {
    prop1: Header,
  };
  root.render(<App />);
} else {
  console.error('Container element not found');
}
