import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <Welcome text="Hello to using props!!" />
      </div>
    );
  }
}

class Welcome extends Component {
  render() {
    const { text } = this.props;
    return (
      <div>
        <h1>{text}</h1>
      </div>
    );
  }
}

export default App;
