import { StoryFn, Meta } from "@storybook/react";
import ResetDiv from "./BillInfoAndReset";

export default {
  title: "Components/ResetDiv",
  component: ResetDiv,
} as Meta;

const Template: StoryFn = (args) => <ResetDiv {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Add default props here
};
