import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const UserScreen = () => (
  <View style={[styles.container]}>
    <Text>User</Text>
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

export default UserScreen;