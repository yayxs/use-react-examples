import React, { Component } from 'react';
import 'antd/dist/antd.css';
import Header from './Header';
import Search from './Search';
import Movie from './Movie';
export default class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Header />
          <Search />
          <Movie />
        </div>
      </div>
    );
  }
}
