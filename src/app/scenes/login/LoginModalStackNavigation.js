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

const LinkedInLoginScene = ({ navigation, banner }) => (
  <ScrollView>
    <Button
      onPress={() => navigation.navigate('SopraSteriaEmailLogin', { name: 'Jane' })}
      title="Connect to LinkedIn"
    />
  </ScrollView>
);

const SopraSteriaEmailLoginScene = ({ navigation, banner }) => (
  <ScrollView>
    <Button
      onPress={() => navigation.navigate('Core', { name: 'Jane' })}
      title="Send email"
    />
  </ScrollView>
);

LinkedInLoginScene.navigationOptions = {
  title: 'Sopra Steria Initiative',
};

SopraSteriaEmailLoginScene.navigationOptions = {
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

const LoginModalStackNavigation = StackNavigator({
  LinkedInLogin: {
    screen: LinkedInLoginScene,
  },
  SopraSteriaEmailLogin: {
    screen: SopraSteriaEmailLoginScene,
  },
  Core: {
    screen: CoreNavigation,
  },
}, {
  mode: 'modal',
});

export default LoginModalStackNavigation;
