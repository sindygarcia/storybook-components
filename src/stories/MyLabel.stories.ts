import type { Meta, StoryObj } from '@storybook/react-vite';
import { MyLabel } from '../components/MyLabel';

const meta = {
  title: 'MyLabel',
  component: MyLabel,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'inline-radio' }, // controls how the size options are displayed in the storybook
    fontColor: { control: 'color' },
  },
  parameters: {
    layout: 'centered',
  }
} satisfies Meta<typeof MyLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: 'Basic Label',
  }
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Label',
    color: 'text-secondary',
  }
};

export const AllCaps: Story = {
  args: {
    label: 'All Caps Label',
    allCaps: true,
  }
};

export const CustomColor: Story = {
  args: {
    label: 'Custom Color Label',
    fontColor: 'green',
  }
};
