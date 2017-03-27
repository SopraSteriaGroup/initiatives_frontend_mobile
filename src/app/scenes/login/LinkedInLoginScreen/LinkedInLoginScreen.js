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

import LinkedInSDK from 'react-native-linkedin-sdk';

export default class LinkedInLoginScreen extends AbstractLoginTemplateScreen {

  constructor(props) {
    super(props);
  }

  // later in your code...
  async signInLinkedIn(navigation) {
    const token = await LinkedInSDK.signIn({
      // https://developer.linkedin.com/docs/oauth2

      // iOS (Required)
      // The "API Key" value generated when you registered your application.
      clientID: 'y9zqn7a7h9ds',

      // iOS (Required)
      clientSecret: 'sKtWlPHChaRrhg7W',

      // iOS (Required)
      // A unique string value of your choice that is hard to guess. Used to prevent CSRF.
      state: 'one_string_very_difficult_to_find_cba_84_@dmin',

      // iOS, Android (Required)
      scopes: [
        'r_basicprofile',
        'r_emailaddress',
        'w_share',
      ],

      // iOS (Required)
      // The URI your users will be sent back to after authorization.  This value must match one of the defined OAuth 2.0 Redirect URLs in your application configuration.
      // e.g. https://www.example.com/auth/linkedin
      redirectUri: 'https://www.google.com',
    });

    const profile = await LinkedInSDK.getRequest('https://api.linkedin.com/v1/people/~?format=json');

    console.log(token, profile);

    navigation.navigate('SopraSteriaEmailLoginScreen')
  }

  renderLoginContent(navigation){
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Button style={LinkedInLoginScreenStyles.btn}
            onPress={() => this.signInLinkedIn(navigation)} >
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
