import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import Loading from './Components/Loading';
import TextInputExample from './Components/TextForm';
import SimpleList from './Components/SimpleList';
import HomeScreen from './Components/HomeScreen';
import { NavigationContainer, useNavigation, DrawerActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from './Components/ProfileScreen';
import UserScreen from './Components/UserScreen';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Entypo';

const StackNav = () => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();
  return (
    <Stack.Navigator initialRouteName='Home' screenOptions={{
      statusBarColor: 'teal',
      headerStyle: {
        backgroundColor: 'teal'
      },
      headerTintColor: '#fff',
      headerTitleAlign: 'center',
      headerLeft: ()=>{
        return(
          <Icon name='menu' size={30} color='#fff' 
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
        )
      }
    }}>
      <Stack.Screen name="Home" component={HomeScreen} options={{}} />
      <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: true }} />
      <Stack.Screen name="User" component={UserScreen} />
    </Stack.Navigator>
  )
}

const DrawerNav = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator screenOptions={{
      headerShown: false
    }}>
      <Drawer.Screen name='Home' component={StackNav} />
      {/* <Drawer.Screen name='Profile' component={ProfileScreen} />
      <Drawer.Screen name='User' component={UserScreen} /> */}
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNav />
    </NavigationContainer>
  )



  // const [loading, setLoading] = useState(false)
  // const [form, setForm] = useState(false)
  // const [list, setList] = useState(false)

  // function showComponents(title) {
  //   if (title == 'loading') {
  //     setForm(false)
  //     setList(false)
  //     setLoading(true)
  //   } else if(title=='form') {
  //     setLoading(false)
  //     setList(false)
  //     setForm(true)
  //   } else if(title == 'list') {
  //     setLoading(false)
  //     setForm(false)
  //     setList(true)
  //   } else {
  //     setLoading(true)
  //     setForm(true)
  //     setList(true)
  //   }
  // }

  // return (
  //   <>
  //     <View>
  //       <Text style={styles.textStyle}>Components</Text>
  //     </View>
  //     <View>
  //       <Button
  //         style={[styles.buttons, { backgroundColor: 'red' }]}
  //         textColor='white'
  //         labelStyle={{ fontSize: 20 }}
  //         onPress={() => showComponents('loading')}
  //       >Show Loading</Button>
  //       <Button
  //         style={[styles.buttons, { backgroundColor: 'blue' }]}
  //         textColor='white'
  //         labelStyle={{ fontSize: 20 }}
  //         onPress={() => showComponents('form')}
  //       >Show Form</Button>
  //       <Button
  //         style={[styles.buttons, { backgroundColor: 'green' }]}
  //         textColor='white'
  //         labelStyle={{ fontSize: 20 }}
  //         onPress={() => showComponents('list')}
  //       >Show Flatlist</Button>
  //       <Button
  //         style={[styles.buttons, { backgroundColor: 'black' }]}
  //         textColor='white'
  //         labelStyle={{ fontSize: 20 }}
  //         onPress={() => showComponents('all')}
  //       >Show All</Button>
  //     </View>
  //     <View>
  //       {loading ? <Loading /> : ""}
  //       {form ? <TextInputExample /> : ""}
  //       {list ? <SimpleList /> : ""}
  //     </View>
  //   </>
  // );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
    marginTop: 10,
  },
  buttons: {
    width: '100%',
    borderRadius: 3,
    marginBottom: 10,
  },
})