import type { Meta, StoryObj } from "@storybook/react";
import TipButton, { TipButtonProps } from "./TipButton";

const meta: Meta<TipButtonProps> = {
  title: "TipButton/TipButton",
  component: TipButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<TipButtonProps>;

export const PrimaryButton: Story = {
  args: {
    label: "5%",
  },
};

export const SecondaryButton: Story = {
  args: {
    label: "10%",
  },
};

export const DangerButton: Story = {
  args: {
    label: "15%",
  },
};
