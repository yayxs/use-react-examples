import React, { Component } from 'react';
class Form extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      name: 'yayxs',
      age: 18
    };

    this.state = this.initialState;
  }
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Form;
