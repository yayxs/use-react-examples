import React, {Component} from 'react';
import SplashScreen from 'react-native-splash-screen';
import NavigationUtil from '../navigation/NavigationUtil';
export default class WelcomePage extends Component {
  componentDidMount() {
    // 设置定时器跳转到首页
    this.timerId = setTimeout(() => {
      // 隐藏启动页
      SplashScreen.hide();
      // 重置到首页
      const {navigation} = this.props;
      console.log(navigation);
      const options = {
        navigation,
        name: 'ChoosePage',
      };
      NavigationUtil.replace(options);
    }, 200);
  }
  componentWillUnmount() {
    this.timerId && clearTimeout(this.timerId);
  }
  render() {
    return null;
  }
}
