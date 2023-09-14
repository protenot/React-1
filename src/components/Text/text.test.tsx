import { Text } from './text';
import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';

describe('Text', () => {
  it('renders Text component', async () => {
    render(<Text font={'normal'} />);
    screen.debug();
    screen.logTestingPlaygroundURL();
    const text1 = screen.getByText(
      /joy prepared poor\. good believing prevent\. amiable admiration meritsresources waiting sight no father hunted plenty alteration mrs welcome nor\. since mutual little over betrayed returned elderly extremity girl wondered entrance herself amiable is behaved interested concluded\. change morning letter uneasy horses attempt sportsman spot we my\./i,
    );
  });
});
