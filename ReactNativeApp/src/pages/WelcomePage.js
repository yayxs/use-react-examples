import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

export default class WelcomePage extends Component {
  handleClick = () => {
    console.log('点击了按钮');
  };
  render() {
    return (
      <View>
        <Text> 欢迎 </Text>
        <Button title="按钮" onPress={this.handleClick} />
      </View>
    );
  }
}
