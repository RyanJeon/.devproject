import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
} from 'react-native';
//import Navigator from 'react-native-navigator';
import Header from '../components/Header';
import {StackNavigator} from 'react-navigation';
import ProfilePage from './ProfilePage';
import NavBar from '../components/NavBar';
import MapView from 'react-native-maps';




export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  }


  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>

        <NavBar label = "Profile" command = {() => navigate('Profile')}/>
        <MapView
          style = {styles.map}
          Region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        ></MapView>


        <Text>Choose Destination!</Text>


      </View>
    );
  }
}



const styles =StyleSheet.create({
  map: {
    //position: 'absolute',
    height: 300,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
})
