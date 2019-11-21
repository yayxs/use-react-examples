import React, { Component } from 'react';
import { List } from 'antd';
import store from '../store';
// 简单声明个数据源头

const data = ['小丑', '肖申克的救赎', '哈尔的移动城堡'];
export default class Movie extends Component {
  constructor(props) {
    super(props);
    console.log(store.getState());
    this.state = store.getState();
  }
  render() {
    return (
      <div>
        <List
          header={<div>电影搜索</div>}
          footer={<div>https://yayxs.github.io</div>}
          bordered
          dataSource={data}
          renderItem={item => <List.Item>{item}</List.Item>}
        />
      </div>
    );
  }
}
