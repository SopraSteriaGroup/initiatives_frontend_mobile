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
import { Container, Content, Button, Text } from 'native-base';

export default class LinkedInLoginScene extends Component {
  render() {
    const navigation = this.props.navigation;

    return (
      <Container style={styles.container}>
        <View style={styles.content}>
          <Button
            onPress={() => navigation.navigate('SopraSteriaEmailLoginScreen')} >
            <Text>LinkedIn Login</Text>
          </Button>
        </View>
      </Container>
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
