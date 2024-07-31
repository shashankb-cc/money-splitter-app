import { StoryFn, Meta } from "@storybook/react";
import SelectTip from "./SelectTip";

export default {
  title: "Components/SelectTip",
  component: SelectTip,
} as Meta;

const Template: StoryFn = (args) => (
  <SelectTip
    label={"Select tip %"}
    value1={5}
    value2={10}
    value3={15}
    value4={20}
    value5={50}
    {...args}
  />
);

export const Default = Template.bind({});
Default.args = {};
