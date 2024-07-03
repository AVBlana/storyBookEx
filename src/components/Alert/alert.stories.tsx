import { StoryFn } from "@storybook/react";
import Alert, { AlertProps, AlertVariant } from "./Alert";

export default {
  title: "Components/Alert",
  component: Alert,
  args: {
    message: "default",
  },
  argTypes: {
    noBorder: { control: "boolean" },
    noShadow: { control: "boolean" },
    message: { control: "text" },
  },
};

const Template: StoryFn<AlertProps> = (args) => <Alert {...args} />;

export const SuccessAlert = Template.bind({});

SuccessAlert.args = {
  variant: AlertVariant.SUCCESS,
  message: "Success login",
};

export const WarningAlert = Template.bind({});

WarningAlert.args = {
  variant: AlertVariant.WARNING,
  message: "Password must be x characters",
};

export const ErrorAlert = Template.bind({});

ErrorAlert.args = {
  variant: AlertVariant.ERROR,
  message: "Error login",
};
