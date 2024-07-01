import React from "react";

const Button = ({ children, disabled }) => {
  return (
    <>
      <button
        style={{
          padding: 12,
          fontSize: 12,
          background: disabled ? "lightgray" : "green",
          color: disabled ? "gray" : "white",
        }}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
