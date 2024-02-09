import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, ScrollView, TextInput, Image } from 'react-native';

import LoginScreen from './app/screens/LoginScreen.js';
import HomepageScreen from './app/screens/HomepageScreen.js';
import ProfileScreen from './app/screens/ProfileScreen.js';
import FriendsScreen from './app/screens/FriendsScreen.js';


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen name="Login" component ={LoginScreen}></Drawer.Screen>
        <Drawer.Screen name="Homepage" component = {HomepageScreen}></Drawer.Screen>
        <Drawer.Screen name="Friends" component={FriendsScreen}></Drawer.Screen>
        <Drawer.Screen name="Profile" component={ProfileScreen}></Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});