// Gallery.js

import React from 'react';
import { View, StyleSheet } from 'react-native';
import UserProfile from './UserProfile';

const Gallery = ({ profiles }) => {
  return (
    <View style={styles.galleryContainer}>
      {profiles.map((user) => (
        <View key={user.id} style={styles.profileWrapper}>
          <UserProfile user={user} />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  galleryContainer: {
    flex: 1,
    flexDirection: 'row', // Arrange profiles horizontally
    flexWrap: 'wrap', // Allow profiles to wrap to the next row
  },
  profileWrapper: {
    width: '50%', // Set each profile to take up 25% of the screen width
    aspectRatio: 1, // Ensure each profile has a square aspect ratio
  },
});

export default Gallery;
