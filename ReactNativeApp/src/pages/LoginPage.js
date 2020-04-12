import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  ActivityIndicator,
} from 'react-native';

import {Button, Block, Input, Text} from '../componenets';
import {theme} from '../constants';
// 定义验证的用户名和密码
const VALID_USERNAME = 'admin';
const VALID_PASSWORD = '123456';

export default class LoginPage extends Component {
  state = {
    username: VALID_USERNAME,
    password: VALID_PASSWORD,
    errors: [],
    loading: false,
  };

  handleForgotPassword = () => {
    console.log('忘记密码');
  };
  // 登录
  handleLogin = () => {
    console.log('点击了登录');
    console.log(this.state.username);
    console.log(this.state.password);
  };
  render() {
    const {navigation} = this.props;
    const {loading, errors, username, password} = this.state;
    const hasErrors = (key) => (errors.includes(key) ? styles.hasErrors : null);

    return (
      // <KeyboardAvoidingView style={styles.login} behavior="padding">
      <View style={styles.login}>
        <Block padding={[0, theme.sizes.base * 2]}>
          {/* <Text h1 bold>
            登录
          </Text> */}
          <Block middle>
            <Text h1 bold center>
              登录
            </Text>
            <Input
              label="用户名"
              error={hasErrors('email')}
              style={[styles.input, hasErrors('email')]}
              defaultValue={username}
              onChangeText={(text) => this.setState({username: text})}
            />

            <Input
              label="密码"
              error={hasErrors('email')}
              style={[styles.input, hasErrors('email')]}
              defaultValue={password}
              onChangeText={(text) => this.setState({password: text})}
            />
            <Button gradient onPress={() => this.handleLogin()}>
              {loading ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                <Text bold white center>
                  登录
                </Text>
              )}
            </Button>
            <Button onPress={this.handleForgotPassword}>
              <Text
                gray
                caption
                center
                style={{textDecorationLine: 'underline'}}>
                忘记密码
              </Text>
            </Button>
          </Block>
        </Block>
      </View>
      //  </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  login: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  hasErrors: {
    borderBottomColor: theme.colors.accent,
  },
});
