import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation'

import DashboardScreen from './screens/DashboardScreen';
import LoadingScreen from './screens/LoadingScreen';
import LoginScreen from './screens/LoginScreen';

import firebase from 'firebase';
import {FirebaseContext} from './context';
import firebaseConfig from './config';

firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
  render() {
    contextData = {
      hello: "This is a string",
      firebase
    }
    return (
      <FirebaseContext.Provider value={contextData}>
        <AppNavigator/>
      </FirebaseContext.Provider>
    );
  } 
}

const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen: LoadingScreen,
  LoginScreen: LoginScreen,
  DashboardScreen: DashboardScreen

})

const AppNavigator = createAppContainer(AppSwitchNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
