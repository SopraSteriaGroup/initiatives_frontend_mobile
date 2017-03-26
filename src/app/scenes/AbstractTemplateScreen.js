/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Text } from 'native-base';

import AbstractTemplateScreenStyles from './AbstractTemplateScreenStyles';

export default class AbstractTemplateScreen extends Component {

  constructor(props) {
    
    super(props);
  }

  renderContent(props){
    return (
      <View style={AbstractTemplateScreenStyles.container}>
        <View style={AbstractTemplateScreenStyles.content}>
            <Text>You forget to override renderContent...</Text>
        </View>
      </View>
    );
  }

  render() {
    const navigation = this.props.navigation;

    return (
      <Container>
        {this.renderContent(navigation)}
      </Container>
    );
  }
}
