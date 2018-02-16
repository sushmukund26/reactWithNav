import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text, Button,
  View,
  Switch,
  ListView,
} from 'react-native';

const contacts = [
    {
        name: 'John Doe',
        isFavorite: false,
        id: 1
    },
    {
        name: 'Brad Traversy',
        isFavorite: true,
        id: 2
    },
    {
        name: 'Steve Smith',
        isFavorite: true,
        id: 3
    }
];

export default class Contacts extends Component<Props> {

  constructor() {
    super();
    const members = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      names: members.cloneWithRows(contacts),
      contactList: contacts
    }
  }

  switchChange(rowData, value) {
     newContacts = this.state.contactList.slice()
     newContacts = newContacts.map((el) =>  rowData.id === el.id ?Object.assign({}, el, {isFavorite: value}): el)
    console.log(newContacts);
    this.setState({
      names: this.state.names.cloneWithRows(newContacts),
      contactList: newContacts
    })
  }

renderFavorite() {
  filterdContacts = this.state.contactList.filter((el) => el.isFavorite).map((el) => el.name)
  const members = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

  return (
  <ListView 
  dataSource = {members.cloneWithRows(filterdContacts)}
  renderRow = {(rowData) => <Text>{rowData}</Text>}/>
    )
}
  render() {
    return (
      <View>
      <ListView
      dataSource = {this.state.names}
      renderRow = {(rowData) =>
        <View 
        style={styles.container}>
          <Text>{rowData.name}</Text>
          <Switch
          style = {styles.switchElement}
          value = {rowData.isFavorite}
          onValueChange = {(value) => this.switchChange(rowData, value)}/>
         </View>
      } />
            
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding:10,
    borderColor: 'black',
    borderBottomWidth: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  switchElement: {
    position: 'absolute', 
    right: 10
  },
});
