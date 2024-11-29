import React from 'react';
import users from '../data/users';
import {FlatList, View, StyleSheet, Alert} from 'react-native';
import {ListItem, Avatar, Icon} from 'react-native-elements';

export default props => {
  function getUserItem({item: user}) {
    return (
      <ListItem
        key={user.id}
        bottomDivider
        onPress={() => props.navigation.navigate('UserForm', user)}>
        <Avatar source={{uri: user.avatarUrl}} />
        <ListItem.Content>
          <ListItem.Title>{user.name}</ListItem.Title>
          <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
        </ListItem.Content>
        <Icon
          name="edit"
          type="material"
          color="orange"
          size={25}
          onPress={() => props.navigation.navigate('UserForm', user)}
        />
        <Icon
          name="delete"
          type="material"
          color="red"
          size={25}
          onPress={() => confirmUserDeletion(user)}
        />
      </ListItem>
    );
  }

  function confirmUserDeletion(user) {
    Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?', [
      {
        text: 'Sim',
        onPress: () => {
          console.warn("Delete " + user.id)
        },
      },
      {
        text: 'Não',
      },
    ]);
  }

  return (
    <View >
      <FlatList
        keyExtractor={user => user.id.toString()}
        data={users}
        renderItem={getUserItem}
      />
    </View>
  );
};


