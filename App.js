import { View, Text, Image, ImageBackground, ScrollView, Button, Pressable, Modal, StatusBar, ActivityIndicator, Alert, StyleSheet } from 'react-native';
import logoImg from './assets/adaptive-icon.png';
import { useState } from 'react';
import Greet from './components/Greet';
import Box from './components/Box';

export default function App() {
  let [isModelVisible, setIsModelVisible] = useState(false);
  return (
    <View style={[styles.container, styles.text]}>
      <StatusBar backgroundColor='lightblue' barStyle='light-content' hidden />
      <ScrollView>
        <ImageBackground source={logoImg} >
          <View style={{ width: 200, height: 200, backgroundColor: "lightblue" }}></View>
          <View style={{ width: 200, height: 200, backgroundColor: "lightgreen" }}></View>
          <Text>
            Welcome
            <Text style={styles.text}> back!</Text> 
          </Text>
          <Image source={logoImg} style={{ width: 100, height: 100 }} />
          <Pressable onPressOut={() => console.log("Image pressed")}>
            <Image source={{ uri: "https://picsum.photos/200" }} style={{ width: 200, height: 200 }} />
          </Pressable>
          <Button title='Open Model' onPress={() => setIsModelVisible(true)} color="green" />
          <Modal visible={isModelVisible} onRequestClose={() => setIsModelVisible(false)} animationType='slide' presentationStyle='pageSheet'>
            <View>
              <Text>Modal content</Text>
              <Button title='close' onPress={() => setIsModelVisible(false)} />
            </View>
          </Modal>
        </ImageBackground>
        <ActivityIndicator size='large' color='midnightblue' animating={true} />
        <Button title='Alert' onPress={() => Alert.alert("Invalid Data!", "DOB missing", [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel pressed")
          },
          {
            text: "OK",
            onPress: () => console.log("OK pressed")
          }
        ])} />
        <Greet name="apple" />
        <Greet name="orange" />
        <Box style={{color: 'red'}}>Box 1</Box>
        <Box style={{color: 'green'}}>Box 2</Box>
        <Box style={{color: 'blue'}}>Box 3</Box>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: "plum", padding: 50
  },
  text: {
    color: "white",
    fontWeight: "bold"
  }
})