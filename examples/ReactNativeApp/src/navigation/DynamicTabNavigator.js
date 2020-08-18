import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import {connect} from 'react-redux';

import HomePage from '../pages/HomePage';
import FavoritePage from '../pages/FavoritePage';
import ListPage from '../pages/ListPage';
import MinePage from '../pages/MinePage';
import WelcomePage from '../pages/WelcomePage';
const Tab = createBottomTabNavigator();

const TABS = {
  //在这里配置页面的路由
  FavoritePage: {
    screen: FavoritePage,
    navigationOptions: {
      tabBarLabel: '最爱',
      tabBarIcon: ({color, focused}) => (
        <MaterialIcons name={'favorite'} size={26} style={{color: color}} />
      ),
    },
  },
  ListPage: {
    screen: ListPage,
    navigationOptions: {
      tabBarLabel: '列表',
      tabBarIcon: ({color, focused}) => (
        <AntDesignIcons name={'profile'} size={26} style={{color: color}} />
      ),
    },
  },
  MinePage: {
    screen: MinePage,
    navigationOptions: {
      tabBarLabel: '我的',
      tabBarIcon: ({color, focused}) => (
        <AntDesignIcons name={'user'} size={26} style={{color: color}} />
      ),
    },
  },
};

class DynamicTabNavigator extends Component {
  constructor(props) {
    super(props);
  }

  _tabNavigator() {
    if (this.Tabs) {
      return this.Tabs;
    }
    const {
      FavoritePage: FavoriteScreen,
      ListPage: ListScreen,
      MinePage: MineScreen,
    } = TABS;

    // 配置是否要显示的tab
    const tabs = {FavoriteScreen, ListScreen, MineScreen};
    return (this.Tabs = (
      <NavigationContainer independent={true}>
        <Tab.Navigator>
          {/* <Tab.Screen name="FavoritePage" component={FavoritePage} />
          <Tab.Screen name="ListPage" component={ListPage} />

          <Tab.Screen name="MinePage" component={MinePage} /> */}

          {Object.entries(tabs).map((item) => {
            return (
              <Tab.Screen
                name={item[0]}
                component={item[1].screen}
                options={item[1].navigationOptions}
              />
            );
          })}
        </Tab.Navigator>
      </NavigationContainer>
    ));
  }

  render() {
    return this._tabNavigator();
  }
}

export default connect()(DynamicTabNavigator);
