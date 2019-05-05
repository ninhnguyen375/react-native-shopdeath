import React, { Component } from "react";
import { Button, Text, View, Image, StyleSheet } from "react-native";

class ProductListItem extends Component {
  render() {
    const { product, onPressAddToCart } = this.props;

    return (
      <View style={styles.container}>
        <Image
          style={styles.productImage}
          source={{
            uri: product.product_img
          }}
          resizeMode={"contain"}
        />
        <Text style={styles.productName}>{product.product_name}</Text>
        <View style={styles.cardWrapBottom}>
          <Text style={styles.productPrice}>${product.product_price}</Text>
          <Button
            style={styles.buttonAdd}
            onPress={onPressAddToCart}
            title="BUY +"
            color="#841584"
            accessibilityLabel="Add to cart"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  productImage: {
    width: 200,
    height: 200
  },
  container: {
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    alignItems: "center",
    elevation: 2,
    padding: 16,
    marginBottom: 20,
    backgroundColor: "#fff"
  },
  productName: {
    fontWeight: "700",
    marginBottom: 10,
    marginTop: 10,
    flexGrow: 1
  },
  productPrice: {
    fontSize: 20,
    fontWeight: "700",
    flexGrow: 1,
    color: "#f36734"
  },
  cardWrapBottom: {
    flexDirection: "row",
    alignItems: "center"
  },
  buttonAdd: {
    paddingLeft: 20,
    paddingRight: 20
  }


});
export default ProductListItem;
