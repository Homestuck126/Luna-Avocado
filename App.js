import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import LoginScreen from './app/screens/LoginScreen.js';
import HomepageScreen from './app/screens/HomepageScreen.js';
import ProfileScreen from './app/screens/ProfileScreen.js';
import FriendsScreen from './app/screens/FriendsScreen.js';
import FriendProfileDisplay from './app/screens/FriendProfileDisplay.js';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen name="Login" component={LoginScreen} />
        <Drawer.Screen name="Homepage" component={HomepageScreen} />
        <Drawer.Screen name="Friends" component={FriendsScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="FriendProfileDisplay" component={FriendProfileDisplay} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
