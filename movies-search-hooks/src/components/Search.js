import React, { Component } from 'react';
import { Input, Button } from 'antd';

export default class Search extends Component {
  render() {
    return (
      <div>
        {/* 输入框 */}
        <Input
          placeholder="请输入搜索的内容"
          style={{
            width: '800px'
          }}
        ></Input>
        {/* 搜索按钮 */}
        <Button icon="search">Search</Button>
        {/* 列表*/}
      </div>
    );
  }
}
