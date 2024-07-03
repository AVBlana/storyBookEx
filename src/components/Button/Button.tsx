import { action } from "@storybook/addon-actions";
import React from "react";

export interface ButtonArgs {
  disabled: boolean;
  children: React.ReactNode;
  onClick?: string;
}

const Button: React.FC<ButtonArgs> = ({ children, disabled, onClick }) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (onClick) {
      action("Button clicked")();
    }
  };
  return (
    <button
      style={{
        padding: 12,
        fontSize: 12,
        background: disabled ? "lightgray" : "green",
        color: disabled ? "gray" : "white",
      }}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
