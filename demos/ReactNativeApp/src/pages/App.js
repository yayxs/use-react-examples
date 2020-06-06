import React from 'react';
import {Provider} from 'react-redux';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AppNavigators from '../navigation/AppNavigators';
import store from '../store/index';
export default class App extends React.Component {
  render() {
    const RootApp = AppNavigators();
    return <Provider store={store}>{RootApp}</Provider>;
  }
}
