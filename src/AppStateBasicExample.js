import React, { Component } from "react";

class App extends Component {
  state = {
    toggle: true
  };

  toggle = () => {
    this.setState({
      toggle: !this.state.toggle
    });
  };

  render() {
    return (
      <div>
        <Welcome text="Hello to using State!!" toggle={this.state.toggle} />
        {this.state.toggle && <p>This should show and hide</p>}
        <button onClick={this.toggle}>Show / Hide </button>
      </div>
    );
  }
}

class Welcome extends Component {
  render() {
    const { text, toggle } = this.props;
    console.log(toggle);
    return (
      <div>
        <h1>{text}</h1>
      </div>
    );
  }
}

export default App;
