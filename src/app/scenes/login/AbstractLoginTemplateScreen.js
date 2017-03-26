/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Image } from 'react-native';

import { Content, View, Text } from 'native-base';

import AbstractTemplateScreen from '../AbstractTemplateScreen';

import AbstractLoginTemplateScreenStyles from './AbstractLoginTemplateScreenStyles';
import AbstractTemplateScreenStyles from '../AbstractTemplateScreenStyles';

const background = require('../../../assets/images/sopra-steria-header.png');

export default class AbstractLoginTemplateScreen extends AbstractTemplateScreen  {

  renderLoginContent(navigation){
    return (
      <View style={AbstractTemplateScreenStyles.container}>
        <View style={AbstractTemplateScreenStyles.content}>
            <Text>You forget to override renderLoginContent...</Text>
        </View>
      </View>
    );
  }

  renderContent(navigation) {
    return (
      <View style={AbstractLoginTemplateScreenStyles.container}>
        <Content>
          <Image source={background} style={AbstractLoginTemplateScreenStyles.shadow} ></Image>
          {this.renderLoginContent(navigation)}
        </Content>
      </View>
    );
  }

}
