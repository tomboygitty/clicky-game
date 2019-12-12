import React, { Component } from "react";

class Button extends Component {
  state = {
    counter: 0
  };

  increment = () => {
      this.setState({ counter: this.state.counter + 1 });

  }

  render() {
      return (
          <button onClick={this.props.buttonClick}>
              <p>Click Me</p>
          </button>>
      );
  }
}

export default Button;
