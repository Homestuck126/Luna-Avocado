import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen from '../screens/LoginScreen.js';
import HomepageScreen from '../screens/HomepageScreen.js';
import ProfileScreen from '../screens/ProfileScreen.js';
import FriendsScreen from '../screens/FriendsScreen.js';
import FriendProfileDisplay from '../screens/FriendProfileDisplay.js';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export const AppStack = () => {
  return (
        <Drawer.Navigator initialRouteName="Homepage">
            <Drawer.Screen name="Homepage" component = {HomepageScreen}></Drawer.Screen>
            <Drawer.Screen name="Friends" component={FriendsScreen}></Drawer.Screen>
            <Drawer.Screen name="Profile" component={ProfileScreen}></Drawer.Screen>
            <Drawer.Screen name="FriendProfileDisplay" component = {FriendProfileDisplay}></Drawer.Screen>
        </Drawer.Navigator>
  );
};

export const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      {/* //<Stack.Screen name="Register" component={SignInScreen} /> */}
    </Stack.Navigator>
  );
};