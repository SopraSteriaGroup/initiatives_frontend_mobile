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

const AppNavigator = LoginModalStackNavigation;

export default () => <AppNavigator />
