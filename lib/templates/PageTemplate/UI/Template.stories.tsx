import { StoryFn, Meta } from "@storybook/react";

import { Template } from "./Template";

export default {
  title: "pages/Template",
  component: Template,
  argTypes: {},
} as Meta<typeof Template>;

const StorybookComponent: StoryFn<typeof Template> = (args) => (
  <Template {...args} />
);

export const Primary = StorybookComponent.bind({});
Primary.args = {
};
