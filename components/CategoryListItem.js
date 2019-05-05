import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';

class CategoryListItem extends Component {
  render() {
    const { category, onPress } = this.props;
    return (
      <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
        <View style={styles.container}>
          <Text style={styles.title}>
            {category.category_name.toUpperCase()}
          </Text>
          <Image
            style={styles.categoryImage}
            source={{ uri: category.category_image }}
          />
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  categoryImage: {
    width: 64,
    height: 64
  },
  container: {
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    alignItems: 'center',
    elevation: 2,
    padding: 25,
    marginBottom: 20,
    backgroundColor: '#fff'
  },
  title: { fontWeight: '700', marginBottom: 15 }
});

export default CategoryListItem;
