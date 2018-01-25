import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
//import Navigator from 'react-native-navigator';
import Header from './components/Header';
import {StackNavigator} from 'react-navigation';
import ProfileScreen from './App';

//const App = StackNavigator({
//  Home: {screen: ProfileScreen},
//  Profile: {screen: HomeScreen},
//});


export class HomeScreen extends Component{
  static navigationOptions = {
    title: 'HomeScreen',
  };
  render(){
    return(
      <View>

      </View>
    )
  }
}
