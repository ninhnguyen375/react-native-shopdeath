import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';
import Categories from './screens/Categories';
import Category from './screens/Category';
import Cart from './screens/Cart';
import Order from './screens/Order';
import Setting from './screens/Setting';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CategoryStack = createStackNavigator({
  Categories,
  Category
});
const CartStack = createStackNavigator({
  Cart
});
const OrderStack = createStackNavigator({
  Order
});
const SettingStack = createStackNavigator({
  Setting
});

CategoryStack.navigationOptions = {
  title: 'SHOPPING',
  tabBarIcon: ({ tintColor }) => (
    <Icon name={'layers'} size={30} color={tintColor} />
  )
};
CartStack.navigationOptions = {
  title: 'CART',
  tabBarIcon: ({ tintColor }) => (
    <Icon name={'shopping-cart'} size={30} color={tintColor} />
  )
};
OrderStack.navigationOptions = {
  title: 'ORDER',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="book" size={30} color={tintColor} />
  )
};
SettingStack.navigationOptions = {
  title: 'SETTING',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="settings" size={30} color={tintColor} />
  )
};
const AppNavigation = createBottomTabNavigator({
  CategoryStack,
  CartStack,
  OrderStack,
  SettingStack
});

export default AppNavigation;
