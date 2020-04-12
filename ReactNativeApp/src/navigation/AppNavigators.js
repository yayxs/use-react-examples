import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomePage from '../pages/WelcomePage';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import CounterDemoPage from '../pages/demo/CounterDemoPage';

const Stack = createStackNavigator();

export default function RootApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginPage"
          component={LoginPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CounterDemoPage"
          component={CounterDemoPage}
          options={{headerShown: false, animationEnabled: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
