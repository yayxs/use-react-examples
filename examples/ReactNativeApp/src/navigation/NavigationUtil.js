import {StackActions} from '@react-navigation/native';

/**
 * 通用的路由跳转
 */
export default class NavigationUtil {
  /**
   * 重置页面
   * @param {string} name
   * @param {object} params 合并到目标路线的参数
   */
  static replace(opts) {
    const navigation = opts.navigation || null;
    const name = opts.name;
    const params = opts.params || {};
    if (!navigation) {
      console.log('navigation不能为空');
      return;
    }
    navigation.dispatch(
      StackActions.replace(name, {
        ...params,
      }),
    );
  }
  /**
   *
   * @param {string} targetNameStr 推入堆栈的路由名称
   * @param {object} params 合并到目标路线的屏幕参数
   */
  static push(targetNameStr, params) {
    // 取到跳转
    const navigation = NavigationUtil.navigation;
    if (!navigation) {
      console.log('navigation不能为空');
      return;
    }
    navigation.dispatch(
      StackActions.replace(targetNameStr, {
        ...params,
      }),
    );
  }

  /**
   * 返回上一页
   * @param navigation
   */
  static goBack(navigation) {
    navigation.goBack();
  }
}
