import React from 'react';
import { View, Text } from 'react-native';
import UserFetcher from '../components/UserFetcher';


const IPADDR = process.env.IPADDR;
const apiUrls =  "http://" + IPADDR +":3000/users";
const MacroInputScreen = () => {
  return (
    <UserFetcher apiUrl= {apiUrls} >
      {(users) => (
        <View>
          {users ? (
            users.map((user) => (
              <View key={user._id}>
                <Text>{user.name} - Macros: {user.macros}</Text>
              </View>
            ))
          ) : (
            <Text>No users available.</Text>
          )}
        </View>
      )}
    </UserFetcher>
  );
};

export default MacroInputScreen;
