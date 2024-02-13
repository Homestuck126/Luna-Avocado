// App.js

import React from 'react';
import Gallery from '../components/Gallery';
import { View, Text } from 'react-native';
const FriendsScreen = () => {
  // Example user profiles
  const userProfiles = [
    {
      id: 1,
      name: 'John Doe',
      bio: 'Frontend Developer',
      avatar: require('../assets/Cats/ThinCat.jpg'),
    },
    {
      id: 2,
      name: 'Jane Smith',
      bio: 'UX Designer',
      avatar: require('../assets/Cats/FatCat.jpg'),
    },
    // Add more profiles as needed
  ];

  return (
   <View style={{ flex: 1 }}>

     <Text style={{ fontSize: 24, fontWeight: 'bold' }}>User Gallery</Text>
     <Gallery profiles={userProfiles} />
   </View>
 );
};

export default FriendsScreen;
