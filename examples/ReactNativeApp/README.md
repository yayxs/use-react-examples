[TOC]

## 一、序言
### 1. 说说心里话
今天看了`老师好我叫何同学`的一期视频，讲的正式为什么总是鸽子。就联想到了自己，眼高手低总是存在，写文章也是一样，总是有想法，但是由于都是些碎片的时间，很容易就不想写了，前一段时间写`flutter`的时候，各种**flag**。 其实创作视频也好，写文章也好。立一些所谓的`flag`，是为了督促自己好好总结，毕竟有几个粉丝在关注，虽然他们也不一定看。我算是明白，`flag`的作用是为了敦促自己前行。好了，闲聊结束。
### 2. 开发环境准备
这个前期不是那个`前妻`，首先还是一些环境的准备，任何开发之前总得有`刀` 吧，我刀呢？无非就是那几个`编辑器` `node环境` `乱马七糟`

  - node
  - python
  - JDK
  - Android Studio
  - 模拟器|手机
### 3. 编辑器准备
 - vscode
    -   React Native Tools
    -   Reactjs code snippets
    

## 二、React Navigation 导航器

**当前已经更新到V5了，一些旧的api已经法发生了变化**

### 1. 常见API

- NavigationContainer

  > 是管理导航树并包含导航状态的组件。该组件必须包装所有导航器结构。通常，我们会在应用程序的根目录下渲染此组件，通常是从导出的组件App.js。

  ```js
  import { NavigationContainer } from '@react-navigation/native';
  
  ```

- createStackNavigator 

  >createStackNavigator是一个返回包含2个属性的对象的函数：Screen和Navigator

  ```js
  import { createStackNavigator } from '@react-navigation/stack'; 
  ```

### 2. 屏幕切换
 -  navigation.navigate('Details')
    - 如果navigation.navigate使用未在堆栈导航器上定义的路由名称进行调用，则不会发生任何事情。换句话说，我们只能浏览到已经在我们的堆栈导航定义的路由- 我们不能定位到任意组件。
    - 该navigate功能大致意味着“转到此屏幕”，并且如果您已经在该屏幕上，则说它什么也不做是有意义的


 - navigation.push('Details')
    - 论现有的导航历史如何，我们都可以表达添加另一条路线的意图。
    - push我们都会向导航堆栈添加一条新路线。当您调用navigate它时，它首先尝试查找具有该名称的现有路由，并且仅在堆栈中还没有路由时才推送新路由

- navigation.goBack()
- navigation.popToTop()，它可以返回到堆栈中的第一个屏幕。



| navigate | 会判断栈中有没有这个组件, 如果有则回到那个页面,如果没有则创建一个新的组件进行压栈展示; |
| -------- | ------------------------------------------------------------ |
| push     | 创建一个新的组件,进行压栈展示;                               |
| goBack   | 返回上一个页面;                                              |
| popToTop | 回到首页组件;                                                |

### 3. 页面之间传参

### 4 .底部tabbar

```js

const HomeScreen = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>Home!</Text>
  </View>
);
```

```js
const SettingsScreen = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>Settings!</Text>
  </View>
);
```

```js
const Tab = createBottomTabNavigator();

```

```js

const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};
```

```js
const App = () => (
  <NavigationContainer>
    <MyTabs />
  </NavigationContainer>
);
export default App;
```
## 三、实用API

```js
import { KeyboardAvoidingView } from 'react-native';

<KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
  ... 在这里放置需要根据键盘调整位置的组件 ...
</KeyboardAvoidingView>
```

本组件用于解决一个常见的尴尬问题：手机上弹出的键盘常常会挡住当前的视图。本组件可以自动根据键盘的位置，调整自身的 height 或底部的 padding，以避免被遮挡。

## 三、React Hook

### 特点

- **完全可选的。**
- **100% 向后兼容的。**
- **现在可用。**

### hooks 概览

#### State Hook



## 三、实际开发

### 通用路由的封装



### 1. 欢迎页

```js
 componentDidMount() {
    // 设置定时器跳转到选择登陆页还是注册页
    this.timerId = setTimeout(() => {
      // 隐藏启动页
      SplashScreen.hide();
      // 重置到首页
      const {navigation} = this.props;
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
```

> 组件常常在 `componentDidMount` 和 `componentDidUpdate` 中获取数据。但是，同一个 `componentDidMount` 中可能也包含很多其它的逻辑，如设置事件监听，而之后需在 `componentWillUnmount` 中清除。相互关联且需要对照修改的代码被进行了拆分，而完全不相关的代码却在同一个方法中组合在一起。如此很容易产生 bug，并且导致逻辑不一致。

在这里我们便是在 ``componentDidMount`` 设置定时器，在 `componentWillUnmount` 清除定时器 ，这本是为了处理同一业务逻辑

**Hook 将组件中相互关联的部分拆分成更小的函数（比如设置订阅或请求数据）**

```js
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
```



### 1. 登陆注册页

### 2. 底部tabar

### 3. 网络请求





## 四 、问题

```shell
Deprecated Gradle features were used in this build, making it incompatible with Gradle 7.0.
Use '--warning-mode all' to show the individual deprecation warnings.
See https://docs.gradle.org/6.0.1/userguide/command_line_interface.html#sec:command_line_warnings
```


### 1. eslint 配置

```js
module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};

```

### 2. 常见设置

- independent={true}



### 3. js方法

可以用来动态的生成`Tab.Screen`

```js
let obj = {
  FirstPage: {
    screen: 'one',
  },
  SecPage: {
    screen: 'two',
  }
}

let resArr = Object.entries(obj)
console.log(resArr)
resArr.map(item=>{
  console.log(item[0])
  console.log(item[1])
})
```

---------------------------------

- 算法相关







