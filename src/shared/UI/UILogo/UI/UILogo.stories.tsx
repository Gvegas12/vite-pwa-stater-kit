import { StoryFn, Meta } from "@storybook/react";

import { UILogo } from "./UILogo";

export default {
  title: "shared/UI/UILogo",
  component: UILogo,
  argTypes: {},
} as Meta<typeof UILogo>;

const StorybookComponent: StoryFn<typeof UILogo> = (args) => (
  <UILogo {...args} />
);

export const Primary = StorybookComponent.bind({});
Primary.args = {
};
