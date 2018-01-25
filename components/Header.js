import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';


export default class Header extends Component {
  render() {
    const {name, school} = this.props;
    return (

        <View style = {styles.headerBG}>
          <View style={styles.header}>
              <View style = {styles.infobox}>
                <Image style = {styles.edit} source = {require('../img/edit.png')} />
                <Text style = {styles.name}> {name}</Text>
                <Text style = {styles.school}>{school}</Text>
              </View>

              <View style= {styles.ppwrap}>
                <Image style = {styles.pp} source={require('../img/pp.jpg')} />
              </View>

          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  edit:{
    alignSelf: 'flex-end',
    marginTop: 1,
    height: 20,
    width: 20,
  },

  headerBG: {
    height: null,
    width: null,
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: 'rgba(0,0,0,0)',
  },



  infobox: {
    alignSelf: 'center',
    height: 460,
    width: '95%',
    padding: '5%',
    marginTop: 80,
    //flex: .95,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 10,
  },

  header: {
    height: null,
    width: null,
    flex: 1,
    alignSelf: 'stretch',
    //justifyContent: 'center',
    //padding: 100,
    backgroundColor: 'rgba(0,0,0,0)',
  },

  ppwrap: {
    position: 'absolute',
    alignSelf: 'center',
    width: 150,
    height: 150,
    borderRadius: 100,
    borderColor: 'rgba(0, 0, 0, .2)',
    borderWidth: 1,
  },

  pp: {
    flex: 1,
    width: null,
    alignSelf: 'stretch',
    borderColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 100,
    borderWidth: 2,
  },

  name: {
    marginTop: '10%',
    fontSize: 30,
    alignSelf: 'center',
  },

  school: {
    fontSize: 20,
    alignSelf: 'center',
  },

});
