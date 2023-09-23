import type { Meta, StoryObj } from '@storybook/react';
import { SelectTypeText, Option } from './selectText';

//import { Option } from "../BlockRenderer/BlockRenderer"

const optionsType: Option[] = [
  { value: 'normal', text: 'normal' },
  { value: 'italic', text: 'italic' },
  { value: 'oblique', text: 'oblique' },
];

const meta = {
  title: 'Component/SelectTypeText',
  component: SelectTypeText,
  tags: ['autodocs'],
  argTypes: {
    onSelectTypeChange: { action: 'selectedType' },
    // options: optionsType as Option[],
  },
  parameters: {
    layout: 'center',
  },
} satisfies Meta<typeof SelectTypeText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: {
    options: optionsType as Option[],
    onSelectTypeChange() {},
    // (selectedType: string) => {
    // console.log(`Selected value: ${selectedType}`);
    //},
  },
};
/*
export const LoggedOut: Story = {
  args: {
    onSelectTypeChange: (selectedType: string) => {
      console.log(`Selected value: ${selectedType}`);
    },
  },
};
export const Default: React.FC<HTMLSelectElement> = () => (
  <SelectTypeText onSelectTypeChange={handleSelectType} />
);
function handleSelectType(selectedType: string): void {
  selectedType = 'normal';
  console.log(`Selected value: ${selectedType}`);
}
 */
