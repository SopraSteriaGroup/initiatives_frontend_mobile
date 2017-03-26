/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';

import { Button, Text } from 'native-base';

import AbstractTemplateScreen from '../AbstractTemplateScreen';
import DataWsFactory from '../../components/services/data-ws/DataWsFactory'

export default class SopraSteriaEmailLoginScene extends AbstractTemplateScreen  {

  sendEmail(navigation){
    DataWsFactory.getUserDataWs().findById('123').result
      .then(response => {
        console.log(response);
        navigation.navigate('WelcomeScreen', response.data);
      }).catch(err =>{
        console.log('error', err);
      });
  }

  renderContent(navigation) {
    return (
      <ScrollView>
        <Button
          onPress={() => this.sendEmail(navigation)}
        >
          <Text>Send email</Text>
        </Button>
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
