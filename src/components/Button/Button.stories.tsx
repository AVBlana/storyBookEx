import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Button, { ButtonArgs } from "@/components/Button/Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    disabled: { control: "boolean" },
    children: { control: "text" },
    onClick: { action: "clicked" },
  },
} as Meta;

const Template: StoryFn<ButtonArgs> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  children: "Click me",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  children: "Don't click me",
};
