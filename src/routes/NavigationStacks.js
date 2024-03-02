import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen from '../screens/LoginScreen.js';
import ProfileScreen from '../screens/ProfileScreen.js';
import FriendsScreen from '../screens/FriendsScreen.js';
import FriendProfileDisplay from '../screens/FriendProfileDisplay.js';
import MacroInputScreen from '../screens/MacroInputScreen.js';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const currentUser = {
  _id: "1265e2aa9f5b4476c1775bc1d93",
  name: "MEGA ADMIN",
  username: "a",
  password: "a",
  macros: 70,
  bio: "I'm tryly the best",
  friends: ["username2", "username3"],

};
export const AppStack = () => {
  return (
        <Drawer.Navigator initialRouteName="Profile">
            <Drawer.Screen name="Profile" component={ProfileScreen}></Drawer.Screen>
            <Drawer.Screen 
              name="MacroInput" 
              component={MacroInputScreen}
              options={{
                drawerLabel:'Log Food',
                headerTitle:'Macros',
              }}
            >
            </Drawer.Screen>
            <Drawer.Screen
  name="Friends"
  options={{ drawerLabel: 'Friends' }}
>
  {() => <FriendsScreen currentUser={currentUser} />}
</Drawer.Screen>

        </Drawer.Navigator>
  );
};

export const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen 
        name="Login" 
        component={LoginScreen}
        options={{
          'headerShown':false
        }}
      />
      {/* //<Stack.Screen name="Register" component={SignInScreen} /> */}
    </Stack.Navigator>
  );
};


//sub app stacks
// Your existing FriendsStack component

export const FriendsStack = ({ currentUser }) => {
  return (
    <Stack.Navigator 
      initialRouteName='FriendsScreen' 
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen 
        name='FriendProfileDisplay' 
        component={FriendProfileDisplay}
        options={{ 
          headerTitle: '',
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen 
        name='FriendsScreen' 
        component={() => <FriendsScreen currentUser={currentUser} />}
        options={{ 
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
