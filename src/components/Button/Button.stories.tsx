import Button from "@/components/Button/Button";
import React from "react";

export default {
  title: "Components/Button",
  component: "Button",
  argTypes: {
    disabled: { control: "boolean" },
    children: { control: "text" },
  },
};

export const Default = (args) => <Button {...args} />;

Default.args = {
  disabled: false,
  children: "Click me",
};

export const Disabled = (args) => <Button {...args} />;

Disabled.args = {
  disabled: true,
  children: "Don't click me",
};
