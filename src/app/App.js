/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

import LoginModalStackNavigation from './scenes/login/LoginModalStackNavigation';
import DrawerNavigation from './scenes/others/DrawerNavigation';
//import Drawer from './scenes/Drawer';
/*
const PossibleRoutes = {
  Drawer: {
    name: 'Drawer Example',
    description: 'Android-style drawer navigation',
    screen: Drawer,
  },
  ModalStack: {
    name: Platform.OS === 'ios' ? 'Modal Stack Example' : 'Stack with Dynamic Header',
    description: Platform.OS === 'ios' ? 'Stack navigation with modals' : 'Dynamically showing and hiding the header',
    screen: ModalStack,
  }
};*/

const MainScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.welcome}>
      Welcome to React Native!
    </Text>
    <Text style={styles.instructions}>
      To get started, edit index.android.js
    </Text>
    <Text style={styles.instructions}>
      Double tap R on your keyboard to reload,{'\n'}
      Shake or press menu button for dev menu
    </Text>
  </View>
);

const AppNavigator = LoginModalStackNavigation;

//const AppNavigator = DrawerNavigation;
AppNavigator.navigator = LoginModalStackNavigation;

export default () => <AppNavigator />

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
