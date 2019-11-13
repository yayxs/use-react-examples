import React, { Component } from 'react';
import Form from './Form';
class Son extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <Form />
        <ul>
          {this.props.propsList.map((item, index) => (
            <li key={index}>
              {item.name}
              <button onClick={() => this.props.del(index)}>删除一个</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Son;
