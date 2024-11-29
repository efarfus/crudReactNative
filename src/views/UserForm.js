import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

export default ({route, navigation}) => {
  const [user, setUser] = useState(route?.params || {});

  return (
    <View style={style.form}>
      <Text>Name</Text>
      <TextInput
        style={style.input}
        onChange={name => setUser({...user, name})}
        placeholder="Informe o nome "
        value={user.name}></TextInput>

      <Text>Email</Text>
      <TextInput
        style={style.input}
        onChange={email => setUser({...user, email})}
        placeholder="Informe o email "
        value={user.email}></TextInput>

      <Text>URL do avatar</Text>
      <TextInput
        style={style.input}
        onChange={avatarUrl => setUser({...user, avatarUrl})}
        placeholder="Informe a URL do avatar "
        value={user.avatarUrl}></TextInput>

        <Button title='Salvar' onPress={() => {
            navigation.goBack()
        }}>

        </Button>
    </View>
  );
};

const style = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
  },
  form: {
    padding: 12,
  },
});
