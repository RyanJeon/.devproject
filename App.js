import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
} from 'react-native';
//import Navigator from 'react-native-navigator';
import Header from './components/Header';
import {StackNavigator} from 'react-navigation';
import HomeScreen from './Pages/Home';
import ProfilePage from './Pages/ProfilePage';
//import MapView from 'react-native-maps';




export const Main = StackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfilePage },

}
  ,{headerMode: 'screen' }
);

export default class App extends Component {
  render() {
    return <Main />;
  }
}
