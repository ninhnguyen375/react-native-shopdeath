import React, { Component } from 'react';
import { Text, View } from 'react-native';

class CartItem extends Component {
  static navigationOptions = {
    title: 'Your Cart',
    headerStyle: {
      backgroundColor: 'black'
    },
    headerTintColor: 'white'
  };
  state = {
    cartItemDetails: null,
    isLoaded: false
  };
  async componentDidMount() {
    const { cartItem } = this.props;
    this.setState({ isLoaded: false });
    try {
      const res = await Axios.get('/products?id=' + cartItem.product);

      this.setState({
        cartItemDetails: { product: res.data, quantity: cartItem.quantity }
      });
    } catch (e) {
    } finally {
      this.setState({ isLoaded: true });
    }
  }
  render() {
    const { cartItemDetails } = this.state;
    return (
      <View>
        <Text>{this.props.cartItem.product}</Text>
      </View>
    );
  }
}

export default CartItem;
