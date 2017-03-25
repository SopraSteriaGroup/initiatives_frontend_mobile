/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
} from 'react-native';

import DataWsFactory from '../../components/services/data-ws/DataWsFactory'

export default class SopraSteriaEmailLoginScene extends Component {

  sendEmail(navigation){
    DataWsFactory.getUserDataWs().findById('123').result
      .then(response => {
        console.log(response);
        navigation.navigate('WelcomeScreen', response.result.data);
      }).catch(err =>{
        console.log('error', err);
      });
  }

  render() {
    const navigation = this.props.navigation;

    return (
      <ScrollView>
        <Button
          onPress={() => this.sendEmail(navigation)}
          title="Send email"
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
