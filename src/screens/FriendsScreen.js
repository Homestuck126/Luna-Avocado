// FriendsScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ProfileListItem from '../components/ProfileListItem';


const FriendsScreen = () => {
  const navigation = useNavigation();

  // Example user profiles
  const userProfiles = [
    {
      id: 1,
      name: 'John Doe',
      bio: 'Frontend Developer',
      avatar: require('../assets/Cats/thincat1.jpg'),
    },
    {
      id: 2,
      name: 'Jane Smith',
      bio: 'UX Designer',
      avatar: require('../assets/Cats/fatcat1.jpg'),
    },
    // Add more profiles as needed
  ];

  const navigateToProfileScreen = (profile) => {
    navigation.navigate('FriendProfileDisplay', { profile });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>User Gallery</Text>
      {userProfiles.map((profile) => (
        <ProfileListItem
          key={profile.id}
          profile={profile}
          onPress={navigateToProfileScreen}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default FriendsScreen;
