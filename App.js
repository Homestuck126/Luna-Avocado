import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, ScrollView, TextInput, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

import Homepage from './screens/Homepage'
import ProfileScreen from './screens/Profile';
import SettingsScreen from './screens/Settings';
import SavedScreen from './screens/Saved';
import ReferScreen from './screens/Refer';
import DrawerItems from './constants/DrawerItems';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerType="front"
        initialRouteName="Profile"
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: {marginVertical: 10},
        }}
      >
        {
          DrawerItems.map(drawer=>
          <Drawer.Screen
            key={drawer.name}
            name={drawer.name}
            options={{
              drawerIcon:({focused})=>
              drawer.iconType==='Material' ?
                <MaterialCommunityIcons
                name={drawer.iconName}
                />
              :
              drawer.iconType==='Feather' ?
                <Feather
                  name={drawer.iconName}
                  size={24}
                  color={focused ? "#e91e63" : "black"}
                />
              :
              <FontAwesome5
                name={drawer.iconName}
                size={24}
                colo={focused ? "#e91e63" : "black"}
              />
            }}
            component={
              drawer.name==='Profile' ? ProfileScreen
             : drawer.name==='Settings' ? SettingsScreen
               : drawer.name==='Saved Items' ? SavedScreen
                 : ReferScreen
            }
          />
          )
        }
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
