import React, { Component } from "react";

export default class EffectClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentDidMount(){
      console.log(`componentDidMount`)
      document.title = `You clicked ${this.state.count} times`;
  }
  componentDidUpdate(){
      console.log(`componentDidUpdate`)
      document.title = `You clicked ${this.state.count} times`;
  }
  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}
