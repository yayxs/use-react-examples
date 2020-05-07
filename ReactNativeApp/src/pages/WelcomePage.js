import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import NavigationUtil from '../navigation/NavigationUtil';
// export default class WelcomePage extends Component {
//   componentDidMount() {
//     // 设置定时器跳转到选择登陆页还是注册页
//     this.timerId = setTimeout(() => {
//       // 隐藏启动页
//       SplashScreen.hide();
//       // 重置到首页
//       const {navigation} = this.props;
//       const options = {
//         navigation,
//         name: 'ChoosePage',
//       };
//       NavigationUtil.replace(options);
//     }, 200);
//   }
//   componentWillUnmount() {
//     this.timerId && clearTimeout(this.timerId);
//   }
//   render() {
//     return null;
//   }
// }

const WelcomePage = (props) => {
  const {navigation} = props;
  useEffect(() => {
    const timer = setTimeout(() => {
      SplashScreen.hide();
      NavigationUtil.replace({
        navigation,
        name: 'ChoosePage',
      });
    }, 200);
    return () => clearTimeout(timer);
  }, []);
  return null;
};
export default WelcomePage;
