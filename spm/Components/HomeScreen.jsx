import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const HomeScreen = (props) => (
  <View style={[styles.container]}>
    <Text>Home</Text>
    <Button title='Profile' onPress={()=>props.navigation.navigate('Profile', {
        name: 'rag'
    })} />
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

export default HomeScreen;