import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import MyStackNavigator from './routes/stacknavigation';

export default function App() {
  return (
    <MyStackNavigator/>
    // <View style={styles.container}>
    //   <Text style={styles.textStyle}>Open up App.js to start working on your app!</Text>
    //   <Text>Chala chusam ani cheppu vadikiiii</Text>
    //   <TextInput placeholder="Add me"></TextInput>
    //   <Button
    //       title="Addd"
    //     ></Button>
    //   <StatusBar style="auto" />
    // </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   textStyle:{
//     color:'red',
//   }
// });
