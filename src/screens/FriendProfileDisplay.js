// FriendProfileDisplay.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { generateAvatar } from '../components/AvatarUtils';
const FriendProfileDisplay = ({ route }) => {

  const { friend } = route.params;
  const profile =  generateAvatar(friend)

  return (
    <View style={styles.container}>
      <Image source={profile.avatar} style={styles.avatar} />
      <Text style={profile.name}>{profile.name}</Text>
      <Text style={profile.bio}>{profile.bio}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bio: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default FriendProfileDisplay;
