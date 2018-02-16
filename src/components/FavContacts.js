import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text, Button,
  View,
  Switch,
  ListView,
} from 'react-native';

export default class FavContacts extends Component<Props> {

  constructor() {
    super();

  }

renderFavorite() {
  filterdContacts = this.props.contactList.filter((el) => el.isFavorite).map((el) => el.name)
  const members = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

  return (
  <ListView 
  dataSource = {members.cloneWithRows(filterdContacts)}
  renderRow = {(rowData) => <Text>{rowData}</Text>}
  />
    )
}
  render() {
    return (
      <View>
            {this.renderFavorite()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
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
