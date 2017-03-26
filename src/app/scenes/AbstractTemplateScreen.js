/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Text } from 'native-base';

export default class AbstractTemplateScreen extends Component {

  renderContent(props){
    return (
      <View style={styles.container}>
        <View style={styles.content}>
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
