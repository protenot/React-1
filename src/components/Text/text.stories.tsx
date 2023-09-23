import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './text';

const meta = {
  title: 'Component/Text',
  component: Text,
  tags: ['autodocs'],
  parameters: {
    layout: 'center',
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: {
    font: 'italic',
    textContent:
      'Joy prepared poor. Good believing prevent. Amiable admiration meritsresources waiting sight no father hunted plenty alteration mrs welcome nor. Since mutual little over betrayed returned elderly extremity girl wondered entrance herself amiable is behaved interested concluded. Change morning letter uneasy horses attempt sportsman spot we my.',
  },
};

export const LoggedOut: Story = {
  args: {
    font: 'italic',
    textContent:
      'Travelling door compliment connection either however principles looking maids woman express excuse sweetness. Going distance dearest visited contented fine sorry declared though enjoyment give him melancholy innate sorry. Gone heart hundred settling newspaper greater numerous two. His blushes dare innate passage play position resolving desirous scale. Placing might attempt mile.',
  },
};
 