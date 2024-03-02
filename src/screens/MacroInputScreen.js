import React from 'react';
import { View, Text } from 'react-native';
import UserFetcher from '../components/UserFetcher';

const MacroInputScreen = () => {
  return (
    <UserFetcher apiUrl="http://10.10.9.53:3000/users">
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
