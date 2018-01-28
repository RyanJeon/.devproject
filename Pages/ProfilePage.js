import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
//import Navigator from 'react-native-navigator';
import Header from '../components/Header';
import {StackNavigator} from 'react-navigation';
import HomeScreen from './Home';
import NavBar from '../components/NavBar';



export default class ProfilePage extends Component {
  static navigationOptions = {
    header: null,
  }

  constructor(props){
    super(props);
    this.state = {
      name: "Ryan Jeon",
      school: "Northwestern University"
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image style = {styles.bgm} blurRadius = {1} source = {require('../img/bg3.jpg')}/>
        <NavBar label = "Back" command = {() => navigate('Home')}/>
        <Header  name = {this.state.name} school = {this.state.school}/>

      </View>
    );
  }

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'rgba(230,230,230,1)',
  },


  bgm: {
    width: '100%',
    height: '30%',
    position: 'absolute',
    left: 0,
    top: 0,
    //flex: 1,
    //alignSelf: 't',
  },

  nav: {
    width: null,
    height: 50,
    marginBottom: '3%',
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  edit:{
    alignSelf: 'flex-end',
    marginTop: 1,
    height: 20,
    width: 20,
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
