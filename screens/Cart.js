import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import Axios from 'axios';
import CartItem from '../components/CartItem';

class Cart extends React.Component {
  static navigationOptions = {
    title: 'SHOPDEATH - Prepare For You',
    headerStyle: {
      backgroundColor: 'black'
    },
    headerTintColor: 'white'
  };
  state = {
    cart: [],
    isLoaded: false
  };
  async componentDidMount() {
    this.setState({ isLoaded: false });
    try {
      const res = await Axios.get('/cart');
      this.setState({ cart: res.data });
    } catch (e) {
    } finally {
      this.setState({ isLoaded: true });
    }
  }
  render() {
    const { cart, isLoaded } = this.state;
    return (
      <View>
        {isLoaded ? (
          <View>
            {cart[0] ? (
              <FlatList
                style={styles.container}
                data={cart}
                renderItem={({ item }) => <CartItem cartItem={item} />}
                keyExtractor={item => `${item.cart_id}`}
              />
            ) : (
              <Text>Network Error</Text>
            )}
          </View>
        ) : (
          <Text style={styles.textLoading}>Loading...</Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20
  },
  textLoading: {
    textAlign: 'center',
    color: 'gray'
  }
});
export default Cart;
