import React, { Component } from 'react';
import MyCart from './MyCart';
class App extends Component {
  state = {
    iptVal: '',
    title: '我的购物车',
    goods: [
      {
        id: 1,
        gname: 'aipao'
      },
      {
        id: 2,
        gname: 'biaoma'
      }
    ]
  };
  Add = () => {
    console.log('sasas');
  };
  valChange = e => {
    this.setState({
      iptVal: e.target.value
    });
  };
  render() {
    return (
      <div className="container">
        {this.state.title && <h2>{this.state.title}</h2>}
        <input value={this.state.iptVal} onChange={this.valChange}></input>
        <button onClick={this.Add}>点击了按钮</button>
        <MyCart goods={this.state.goods}></MyCart>
      </div>
    );
  }
}

export default App;
