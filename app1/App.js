import { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Pressable } from 'react-native';

export default function App() {
  let [customImage, setCustomImage] = useState('https://picsum.photos/200')
  return (
    <View style={styles.container}>
      <Text>App</Text>
      <Pressable onPress={() => setCustomImage('https://picsum.photos/200')}>
        <ImageBackground source={{ uri: customImage }} style={{ overflow: 'hidden', borderRadius: 5 }} >
          <View style={styles.viewContainer}>
            {/* <ImageBackground source={{ uri: 'https://picsum.photos/200' }}> */}
            <View style={styles.redContainer}>
              <Text style={{ color: 'white' }}>R</Text>
            </View>
            <View style={styles.greenContainer}>
              <Text style={{ color: 'white', fontStyle: 'italic' }}>G</Text>
            </View>
            <View style={styles.blueContainer}>
              <Text style={{ color: 'white', fontWeight: 'bold' }}>B</Text>
            </View>
            {/* </ImageBackground> */}
          </View>
        </ImageBackground>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  viewContainer: {
    // backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 5
  },
  redContainer: {
    height: '50px',
    width: '50px',
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  greenContainer: {
    height: '50px',
    width: '50px',
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  blueContainer: {
    height: '50px',
    width: '50px',
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  }
})