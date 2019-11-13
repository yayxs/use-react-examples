import React, { Component } from 'react';
import Son from './son.js';
class Father extends Component {
  state = {
    listData: [
      {
        id: 1,
        name: 'whh'
      },
      {
        id: 2,
        name: 'lsd'
      }
    ]
  };

  delList = index => {
    const list = this.state.listData;

    this.setState({
      listData: list.filter((item, i) => i !== index)
    });
  };
  render() {
    return (
      <div>
        <Son propsList={this.state.listData} del={this.delList} />
      </div>
    );
  }
}

export default Father;
