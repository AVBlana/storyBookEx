import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import ClassComponent, { ClassComponentProps } from "./ClassComponent";
import { action } from "@storybook/addon-actions";

export default {
  title: "Components/ClassComponent",
  component: ClassComponent,
  args: {
    onPress: action("Incremented"),
  },
} as Meta;

const Template: StoryFn<ClassComponentProps> = (args) => (
  <ClassComponent {...args} />
);

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
