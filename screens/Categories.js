import React, { Component } from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import CategoryListItem from '../components/CategoryListItem';
import Axios from 'axios';

class Categories extends Component {
  state = {
    categories: [],
    isLoaded: false
  };

  static navigationOptions = {
    title: 'SHOPDEATH  - Prepare For You',
    headerStyle: {
      backgroundColor: 'black'
    },
    headerTintColor: 'white'
  };

  async componentDidMount() {
    this.setState({ isLoaded: false });
    try {
      const res = await Axios.get('/categories');
      this.setState({ categories: res.data });
    } catch (e) {
    } finally {
      this.setState({ isLoaded: true });
    }
  }

  render() {
    const { navigation } = this.props;
    const { categories, isLoaded } = this.state;

    return (
      <View>
        {isLoaded ? (
          <View>
            {categories[0] ? (
              <FlatList
                style={styles.container}
                data={categories}
                renderItem={({ item }) => (
                  <CategoryListItem
                    category={item}
                    onPress={() =>
                      navigation.navigate('Category', {
                        category_id: item.category_id,
                        category_name: item.category_name
                      })
                    }
                  />
                )}
                keyExtractor={item => `${item.category_id}`}
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
export default Categories;
