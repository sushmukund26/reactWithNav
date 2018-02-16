import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Router, Scene, Actions } from 'react-native-router-flux'
import HomePage from './src/components/HomePage'
import Contacts from './src/components/Contacts'
import FavContacts from './src/components/FavContacts'

export default class App extends Component<Props> {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="homePage" component={HomePage} title="Home Page" />
          <Scene 
            rightTitle="Fav"
            onRight={() => Actions.favContacts()}
            key="contacts" 
            component={Contacts} 
            title="Contacts Page" />
          <Scene key="favContacts" component={FavContacts} title="Fav Contacts Page" />
        </Scene>
      </Router>
      
    );
  }
}
