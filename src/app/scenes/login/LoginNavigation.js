/**
 * @flow
 */

import React from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

import CoreNavigation from '../core/CoreNavigation';
import SopraSteriaEmailLoginScreen from './SopraSteriaEmailLoginScreen/SopraSteriaEmailLoginScreen';
import LinkedInLoginScreen from './LinkedInLoginScreen/LinkedInLoginScreen';

LinkedInLoginScreen.navigationOptions = {
  title: 'Sopra Steria Initiative',
};

SopraSteriaEmailLoginScreen.navigationOptions = {
  title: 'Sopra Steria Initiative',
  header : {
    left:null,
  }
};

CoreNavigation.navigationOptions = {
  title: 'Sopra Steria Initiative',
  header : {
    left:null,
  }
};

const LoginNavigation = StackNavigator({
  LinkedInLoginScreen: {
    screen: LinkedInLoginScreen,
  },
  SopraSteriaEmailLoginScreen: {
    screen: SopraSteriaEmailLoginScreen,
  },
  WelcomeScreen: {
    screen: CoreNavigation,
  },
}, {
  mode: 'modal',
});

export default LoginNavigation;
