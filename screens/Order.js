import React from 'react';
import { Text } from 'react-native';

class Order extends React.Component {
  static navigationOptions = {
    title: 'SHOPDEATH  - Prepare For You',
    headerStyle: {
      backgroundColor: 'black'
    },
    headerTintColor: 'white'
  };
  render() {
    return <Text>Order here</Text>;
  }
}

export default Order;
