import React, { Component } from "react";

class App extends Component {
  submit = () => {
    console.log(this.text.value);
    console.log(this.email.value);
  };

  render() {
    return (
      <div>
        <h1>Accessing Refs and DOM Elements</h1>
        <p>Type something in the fields to make this exercise work:</p>
        <input type="text" ref={input => (this.text = input)} />
        <input type="email" ref={input => (this.email = input)} />
        <button onClick={this.submit}>Show value </button>
      </div>
    );
  }
}

export default App;
