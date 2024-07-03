import { action } from "@storybook/addon-actions";
import React, { Component } from "react";

export interface ClassComponentProps {
  message: string;
  onPress: () => void;
}

export interface ClassComponentState {
  count: number;
}

class ClassComponent extends Component<
  ClassComponentProps,
  ClassComponentState
> {
  constructor(props: ClassComponentProps) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState((prevState) => {
      this.props.onPress();
      return { count: prevState.count + 1 };
    });
  };

  render() {
    return (
      <div>
        <p>{this.props.message}</p>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default ClassComponent;
