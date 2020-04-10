import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const App = () => {
  return (
    <View>
      <Text>app组21221件</Text>
      <Icon.Button name="facebook" backgroundColor="#3b5998">
        Login with Facebook
      </Icon.Button>
    </View>
  );
};

export default App;
