import type { Meta, StoryObj } from "@storybook/react";
import {
  CounterComponent,
  CounterComponentProps,
} from "./CounterComponent";

const meta: Meta<CounterComponentProps> = {
  title: "Counter/CounterComponent",
  component: CounterComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    valueLeft: { control: "number" },
    valueRight: { control: "number" },
    isEditingLeft: { control: "boolean" },
    isEditingRight: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<CounterComponentProps>;

export const Default: Story = {
  args: {
    valueLeft: 0,
    valueRight: 0,
    isEditingLeft: false,
    isEditingRight: false,
  },
};

export const LeftCounterIncremented: Story = {
  args: {
    valueLeft: 10,
    valueRight: 0,
    isEditingLeft: false,
    isEditingRight: false,
  },
};

export const RightCounterIncremented: Story = {
  args: {
    valueLeft: 0,
    valueRight: 10,
    isEditingLeft: false,
    isEditingRight: false,
  },
};

export const BothCountersIncremented: Story = {
  args: {
    valueLeft: 5,
    valueRight: 5,
    isEditingLeft: false,
    isEditingRight: false,
  },
};
