import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import LoginScreen from "../screens/LoginScreen.js";
import ProfileScreen from "../screens/ProfileScreen.js";
import FriendsScreen from "../screens/FriendsScreen.js";
import MacroInputScreen from "../screens/MacroInputScreen.js";
import FriendProfileDisplay from "../screens/FriendProfileDisplay.js";
import RegistrationScreen from "../screens/RegistrationScreen.js";
import { useAuth } from "../contexts/Auth.js";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export const AppStack = () => {
  const { userContext } = useAuth();
  console.log("USERCONTEXT\n", userContext);
  return (
    <Drawer.Navigator initialRouteName="Profile">
      <Drawer.Screen name="Profile" component={ProfileScreen}></Drawer.Screen>
      <Drawer.Screen
        name="MacroInput"
        component={MacroInputScreen}
        options={{
          drawerLabel: "Feed Pet",
          headerTitle: "Feed Pet",
        }}
      ></Drawer.Screen>
      <Drawer.Screen name="Friends" options={{ drawerLabel: "Friends" }}>
        {() => <FriendsStack currentUser={userContext} />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};

export const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Register" component={RegistrationScreen} />
    </Stack.Navigator>
  );
};

//sub app stacks
// Your existing FriendsStack component

// ...
export const FriendsStack = ({ currentUser }) => {
  return (
    <Stack.Navigator
      initialRouteName="FriendsScreen"
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="FriendsScreen"
        component={() => <FriendsScreen currentUser={currentUser} />}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="FriendProfileDisplay"
        component={FriendProfileDisplay}
        options={{
          headerTitle: "",
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};
