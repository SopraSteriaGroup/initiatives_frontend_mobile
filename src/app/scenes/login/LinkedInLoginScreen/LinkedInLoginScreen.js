/**
 * Screen where user sign in LinkedIn.
 *
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';
import { Button, Text } from 'native-base';
import AbstractLoginTemplateScreen from '../AbstractLoginTemplateScreen';

import LinkedInLoginScreenStyles from './LinkedInLoginScreenStyles';

export default class LinkedInLoginScreen extends AbstractLoginTemplateScreen {

  constructor(props) {
    super(props);
  }

  renderLoginContent(navigation){
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Button style={LinkedInLoginScreenStyles.btn}
            onPress={() => navigation.navigate('SopraSteriaEmailLoginScreen')} >
            <Text>LinkedIn Login</Text>
          </Button>
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'center',
  }
};
