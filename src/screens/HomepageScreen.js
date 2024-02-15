import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, ScrollView, TextInput, Image, Pressable } from 'react-native';

const Homepage = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.menuButton} onPress={() => console.log('Menu button pressed')}>
        {/* You can use a menu icon or any other icon for your button */}
        <Image source={require('../../assets/favicon.png')} style={styles.menuIcon} />
      </Pressable>

      <View style={styles.imageContainer}>
        <Image source={require('../../assets/icon.png')} style={styles.mainImage} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
  },
  menuIcon: {
    width: 30,
    height: 30,
    // Add any other styles as needed for your menu button icon
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainImage: {
    width: 200, // Adjust the width and height as needed
    height: 200,
    resizeMode: 'cover', // Or 'contain' based on your preference
  },
});

export default Homepage;