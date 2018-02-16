import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text, Button,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux'


export default class HomePage extends Component<Props> {

  gotoPage() {
    Actions.contacts();

  }

  render() {
    return (
      <View style={styles.container}>
        <Button 
          title="Contacts"
          onPress={this.gotoPage}/>
      </View>
    );
  }
}

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
