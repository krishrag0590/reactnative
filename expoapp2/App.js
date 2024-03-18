import { Button, StyleSheet, Text, View } from 'react-native';
import Box from './components/Box';
import { useState } from 'react';
import Names from './components/Names';

export default function App() {
  let [incre, setIncre] = useState(0);

  function increNumber() {
    console.log('func call')
    setIncre(incre+1)
  }
  return (
    <View style={styles.container}>
      <Box>
        <Text style={styles.header}>Text 1</Text>
        <Text style={styles.header}>Text {incre}</Text>
      </Box>
      <Names name={`C${incre}`} />
      <Button title='+' onPress={() => increNumber()} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle:'italic'
  }
})