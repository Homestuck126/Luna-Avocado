// UserProfile.js

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const UserProfile = ({ user }) => {
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
    padding: 10, // Add padding to separate profiles
  },
  profileBox: {
    borderWidth: 1, // Add a border
    borderColor: '#ccc', // Border color
    borderRadius: 10, // Border radius for rounded corners
    padding: 10, // Padding inside the box
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50, // Assuming a circular avatar, adjust as needed
    marginBottom: 10,
  },
});

export default UserProfile;
