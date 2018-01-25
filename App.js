import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';
//import Navigator from 'react-native-navigator';
import Header from './components/Header';
import {StackNavigator} from 'react-navigation';
import HomeScreen from './Home';

//const App = StackNavigator({
//  Home: {screen: HomeScreen},
  //Profile: {screen: ProfileScreen},
//});


export default class ProfileScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "Ryan Jeon",
      school: "Northwestern University"
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style = {styles.bgm} blurRadius = {1} source = {require('./img/bg2.jpg')}/>
        <View style = {styles.nav}>
          <Text style = {styles.backB} > {/*Back button (Text for now)*/}
            Back
          </Text>
          <Image style = {styles.settingB} source = {require('./img/sett.png')} />
        </View>

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
