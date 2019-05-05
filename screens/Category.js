import React, { Component } from "react";
import { StyleSheet, Text, View} from "react-native";
import ProductList from "../components/ProductList";
import Axios from "axios";

class Category extends Component {
  state = {
    products: [],
    isLoaded: false
  };

  async componentDidMount() {
    this.setState({ isLoaded: false });
    const category_id = this.props.navigation.getParam("category_id");
    try {
      const res = await Axios.get("/products?category=" + category_id);
      this.setState({ products: res.data });
    } catch (e) {
    } finally {
      this.setState({ isLoaded: true });
    }
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: `Choose Your ${navigation.getParam("category_name")}'s Style`,
      headerStyle: {
        backgroundColor: "black",
        fontSize: 20
      },
      headerTintColor: "white"
    };
  };
  render() {
    const { products, isLoaded } = this.state;
    return (
      <View>
        {isLoaded ? (
          <View>
            {products[0] ? (
              <ProductList products={products} />
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
  textLoading: {
    textAlign: "center",
    color: "gray"
  }
});
export default Category;
