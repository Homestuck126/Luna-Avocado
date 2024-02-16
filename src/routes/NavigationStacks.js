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
            <Drawer.Screen name="Friends" component={FriendsStack} ></Drawer.Screen>
            <Drawer.Screen name="Profile" component={ProfileScreen}></Drawer.Screen>
        </Drawer.Navigator>
  );
};

export const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name="Login" component={LoginScreen} />
      {/* //<Stack.Screen name="Register" component={SignInScreen} /> */}
    </Stack.Navigator>
  );
};


//sub app stacks
export const FriendsStack = () => {
  return (
    <Stack.Navigator 
      initialRouteName='FriendsScreen' 
      screenOptions={{
        headerShown: true, // Set to true to display the header by default for all screens in this stack
      }}
    >
      <Stack.Screen 
        name='FriendProfileDisplay' 
        component = {FriendProfileDisplay}
        options={{ 
          headerTitle:'',
          headerBackTitleVisible:false,
        }}
      />
      <Stack.Screen 
        name='FriendsScreen' 
        component = {FriendsScreen}
        options={{ 
          'headerShown': false
        }}
      />
    </Stack.Navigator>
  )
}