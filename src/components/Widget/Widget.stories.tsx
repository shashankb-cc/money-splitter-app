import type { Meta, StoryObj } from "@storybook/react";
import { Widget, WidgetInfo } from "./Widget";

const meta: Meta<WidgetInfo> = {
  title: "WidgetComponent/Widget",
  component: Widget,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["info", "warning", "error"],
      },
    },
    textTitle: { control: "text" },
    text: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<WidgetInfo>;

export const InfoWidget: Story = {
  args: {
    type: "info",
    textTitle: "Information",
    text: "This is an informational widget.",
  },
};

export const WarningWidget: Story = {
  args: {
    type: "warning",
    textTitle: "Warning",
    text: "This is a warning widget.",
  },
};

export const ErrorWidget: Story = {
  args: {
    type: "error",
    textTitle: "Error",
    text: "This is an error widget.",
  },
};
