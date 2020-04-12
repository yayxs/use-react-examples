import React, {Component} from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import DynamicTabNavigator from '../navigation/DynamicTabNavigator';
class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={{flex: 1}}>
          <DynamicTabNavigator />
          {/* <Text>sas</Text> */}
        </View>
      </SafeAreaView>
    );
  }
}

// const mapStateToProps = (state, ownProps) => {
//   return {
//     prop: state.prop
//   }
// }

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     dispatch1: () => {
//       dispatch(actionCreator)
//     }
//   }
// }
export default connect()(HomePage);
