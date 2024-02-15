import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ProfileScreen = () => {
  const userProfile = {
    name: 'John Doe',
    bio: 'Frontend Developer',
  };

  const [hungerValue, setHungerValue] = useState(50);

  const fillHungerBar = () => {
    setHungerValue((prevValue) => Math.min(prevValue + 10, 100));
  };

  const decreaseHungerBar = () => {
    setHungerValue((prevValue) => Math.max(prevValue - 10, 0));
  };

  // Determine which avatar to use based on hunger value
  const avatarSource =
    hungerValue >= 50
      ? require('../assets/Cats/fatcat1.jpg')
      : require('../assets/Cats/thincat1.jpg');

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={avatarSource} style={styles.avatar} />
        <Text style={styles.name}>{userProfile.name}</Text>
        <Text style={styles.bio}>{userProfile.bio}</Text>
      </View>

      {/* Hunger Bar */}
      <View style={styles.hungerBarContainer}>
        <View style={[styles.hungerBar, { width: `${hungerValue}%` }]} />
      </View>

      {/* Buttons */}
      <View style={styles.buttonsContainer}>
        {/* Fill Hunger Bar Button */}
        <TouchableOpacity onPress={fillHungerBar}>
          <View style={styles.fillButton}>
            <Text style={styles.buttonText}>Fill Hunger Bar</Text>
          </View>
        </TouchableOpacity>

        {/* Decrease Hunger Bar Button */}
        <TouchableOpacity onPress={decreaseHungerBar}>
          <View style={styles.decreaseButton}>
            <Text style={styles.buttonText}>Decrease Hunger Bar</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  profileContainer: {
    alignItems: 'center',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  bio: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  hungerBarContainer: {
    width: '80%',
    height: 20,
    backgroundColor: '#ddd',
    borderRadius: 10,
    marginVertical: 20,
  },
  hungerBar: {
    height: '100%',
    backgroundColor: '#3498db',
    borderRadius: 10,
  },
  buttonsContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '80%',
  },
  fillButton: {
    backgroundColor: '#27ae60',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  decreaseButton: {
    backgroundColor: '#e74c3c',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ProfileScreen;
