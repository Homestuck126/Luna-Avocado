// UserProfile.js

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const FriendProfile = ({ user }) => {
  return (
    <View style={styles.userProfileContainer}>
      <View style={styles.profileBox}>
        <Image source={user.avatar} style={styles.avatar} />
        <Text>{user.name}</Text>
        <Text>{user.bio}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  userProfileContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10, 
  },
  profileBox: {
    borderWidth: 1,
    borderColor: '#ccc', 
    borderRadius: 10, 
    padding: 10, 
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50, 
    marginBottom: 10,
  },
});

export default FriendProfile;
