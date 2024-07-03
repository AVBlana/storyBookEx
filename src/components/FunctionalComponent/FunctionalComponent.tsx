import { action } from "@storybook/addon-actions";
import React, { useState, useEffect } from "react";

export interface FunctionalComponentProps {
  message: string;
  onPress: () => void;
}

const FunctionalComponent: React.FC<FunctionalComponentProps> = ({
  message,
  onPress,
}) => {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = () => {
    onPress();
    setCount((prevCount) => {
      return prevCount + 1;
    });
  };

  return (
    <div>
      <p>{message}</p>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default FunctionalComponent;
