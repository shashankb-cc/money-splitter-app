import type { Meta, StoryObj } from "@storybook/react";
import NumberInput, { NumberInputProps } from "./NumberInput"; // Adjust the import path as necessary

const meta: Meta<NumberInputProps> = {
  title: "NumberInput/NumberInput",
  component: NumberInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    typeofIcon: {
      control: "select",
      options: ["person", "dollar"],
    },
  },
};

export default meta;
type Story = StoryObj<NumberInputProps>;
export const DollarIcon: Story = {
    args: {
      label: "Bill",
      typeofIcon: "dollar",
    },
  };

export const PersonIcon: Story = {
  args: {
    label: "Person",
    typeofIcon: "person",
  },
};

