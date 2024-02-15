// ProfileListItem.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ProfileListItem = ({ profile, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(profile)}>
      <View style={styles.container}>
        <Image source={profile.avatar} style={styles.avatar} />
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
    marginBottom: 5,
  },
  bio: {
    fontSize: 14,
    color: '#666',
  },
});

export default ProfileListItem;
