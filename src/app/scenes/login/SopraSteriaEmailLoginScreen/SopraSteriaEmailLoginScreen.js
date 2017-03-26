/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Image } from 'react-native';

import { Container, Content, Item, Input, Button, Icon, View, Text } from 'native-base';

import SopraSteriaEmailLoginScreenStyles from './SopraSteriaEmailLoginScreenStyles';

import AbstractLoginTemplateScreen from '../AbstractLoginTemplateScreen';
import DataWsFactory from '../../../components/services/data-ws/DataWsFactory'

const background = require('../../../../assets/images/sopra-steria-header.png');

export default class SopraSteriaEmailLoginScreen extends AbstractLoginTemplateScreen  {

  constructor(props) {
    super(props);
  }

  sendEmail(navigation){
    DataWsFactory.getUserDataWs().findById('123').result
      .then(response => {
        console.log(response);
        navigation.navigate('WelcomeScreen', response.data);
      }).catch(err =>{
        console.log('error', err);
      });
  }

  renderLoginContent(navigation) {
    return (
      <View style={SopraSteriaEmailLoginScreenStyles.bg}>
        <Item style={SopraSteriaEmailLoginScreenStyles.input}>
          <Icon active name="person" />
          <Input placeholder="EMAIL" onChangeText={name => this.setState({ name })} />
        </Item>
        <Button style={SopraSteriaEmailLoginScreenStyles.btn} onPress={() => this.sendEmail(navigation)}>
          <Text>Login</Text>
        </Button>
      </View>
    );
  }

}

// Best practice : define default value.
SopraSteriaEmailLoginScreen.defaultProps = {
  name: '',
};

// Best practice : define type of value.
SopraSteriaEmailLoginScreen.propTypes = {
  name: React.PropTypes.string,
};
