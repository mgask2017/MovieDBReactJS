import React, { Component } from "react";

class App extends Component {
  state = {
    fieldInput: "Hello!"
  };

  updateInput = event => {
    console.log(event.target.value);
    this.setState({
      fieldInput: event.target.value.trim()
    });
  };

  submit = () => {
    console.log(this.text.value);
  };

  render() {
    return (
      <div>
        <h1>Inputs. Controlled vs Uncontrolled + updating state</h1>
        <p>Type something in the fields to make this exercise work:</p>
        <h4>Controlled input:</h4>
        <input
          type="text"
          onChange={this.updateInput}
          value={this.state.fieldInput}
        />{" "}
        <div>{this.state.fieldInput}</div>
        <h4>Uncontrolled input:</h4>
        <input type="text" ref={input => (this.text = input)} />
        <button onClick={this.submit}>Show value </button>
      </div>
    );
  }
}

export default App;
