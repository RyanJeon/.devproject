import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Modal,
} from 'react-native';
import {StackNavigator} from 'react-navigation';


export default class NavBar extends Component {


  render() {
    const {command, label} = this.props;
    return (
      <View style = {styles.nav}>
        <Text style = {styles.backB} onPress = {command}>
          {label}
        </Text>
        <Image style = {styles.settingB} source = {require('../img/sett.png')} />

      </View>

    );
  }
}

const styles = StyleSheet.create({
  nav: {
    width: null,
    height: 50,
    marginBottom: '3%',
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  backB: {
    marginLeft: 5,
    marginTop: 10,
    fontSize: 20,
    //alignSelf: 'flex-start',
  },
  settingB: {
    //marginLeft: '75%',
    marginBottom: 10,
    height: 30,
    width: 30,
    //flex: 1,
    alignSelf: 'flex-end',

  },


});
