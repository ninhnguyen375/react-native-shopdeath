import React, { Component } from "react";
import {Alert, FlatList, StyleSheet, View } from "react-native";
import ProductListItem from "./ProductListItem";

class ProductList extends Component {
  handlePressAddToCart = () => {
    Alert.alert("added")
  };
  render() {
    const { products } = this.props;
    return (
      <View>
        {products && (
          <FlatList
            style={styles.container}
            data={products}
            renderItem={({ item }) => (
              <ProductListItem
                onPressAddToCart={this.handlePressAddToCart}
                product={item}
                onPress={() => navigation.navigate("Category")}
              />
            )}
            keyExtractor={item => `${item.id}`}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0f0f0",
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20
  },
  textLoading: {
    textAlign: "center",
    color: "gray"
  }
});
export default ProductList;
