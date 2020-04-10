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
## 三、实际开发

### 1. 登陆注册页

### 2. 底部tabar





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