import type { Meta, StoryObj } from "@storybook/react";
import { NumberInput, NumberInputProps } from "./NumberInputComponent"; // Adjust the import path as necessary

const meta: Meta<NumberInputProps> = {
  title: "NumberInputComponent/NumberInputComponent",
  component: NumberInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    iconType: {
      control: "select",
      options: ["person", "dollar"],
    },
    errorMessage: { control: "text" },
    // isValidInput: { control: "none" }, // This is a function, and may not be easily controllable in Storybook.
    minValue: { control: "number" },
  },
};

export default meta;
type Story = StoryObj<NumberInputProps>;

export const DollarIcon: Story = {
  args: {
    label: "Bill",
    iconType: "dollar",
  },
};

export const PersonIcon: Story = {
  args: {
    label: "Person",
    iconType: "person",
  },
};
