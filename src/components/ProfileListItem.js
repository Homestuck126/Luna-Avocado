// ProfileListItem.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { generateAvatar } from './AvatarUtils';
const ProfileListItem = ({ user, onPress }) => {
  const profile = generateAvatar(user);

  // Log to check the profile and image source
  console.log('Profile:', profile);
  return (
    <TouchableOpacity onPress={() => onPress(user)}>
      <View style={styles.container}>
        {profile.avatar && (
          <Image source={profile.avatar} style={styles.avatar} />
        )}
        <Text style={styles.name}>{profile.name}</Text>
        <Text style={styles.bio}>{profile.bio}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  bio: {
    fontSize: 14,
    textAlign: 'center',
  },
});

export default ProfileListItem;
