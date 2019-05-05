import React from 'react';
import { createAppContainer } from 'react-navigation';
import AppNavigation from './AppNavigation';
import Axios from 'axios';
Axios.defaults.baseURL = 'http://192.168.43.201:4000';
const AppContainer = createAppContainer(AppNavigation);

class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

export default App;
