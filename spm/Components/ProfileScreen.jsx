import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const ProfileScreen = (props) => (
  <View style={[styles.container]}>
    <Text>Hello, {props.route.params.name}</Text>
    <Button title='User' onPress={()=>props.navigation.navigate('User')} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
});

export default ProfileScreen;