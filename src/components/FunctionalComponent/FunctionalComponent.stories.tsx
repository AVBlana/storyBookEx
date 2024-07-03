import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import FunctionalComponent, {
  FunctionalComponentProps,
} from "@/components/FunctionalComponent/FunctionalComponent";
import { action } from "@storybook/addon-actions";

export default {
  title: "Components/FunctionalComponent",
  component: FunctionalComponent,
  args: {
    onPress: action("Incremented"),
  },
} as Meta;

const Template: StoryFn<FunctionalComponentProps> = (args) => {
  return <FunctionalComponent {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  message: "Hello, World!",
};

export const CustomMessage = Template.bind({});
CustomMessage.args = {
  message: "Custom Message!",
};

export const WithActions = Template.bind({});
WithActions.args = {
  message: "Click to Increment!",
};
