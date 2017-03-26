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
import AbstractTemplateScreen from '../AbstractTemplateScreen';

export default class LinkedInLoginScene extends AbstractTemplateScreen {

  renderContent(navigation){
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Button
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
