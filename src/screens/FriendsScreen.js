import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import ProfileListItem from "../components/ProfileListItem";
import UserFetcher from "../components/UserFetcher";
import { useNavigation } from '@react-navigation/native';

const FriendsScreen = ({ currentUser }) => {
  const IPADDR = process.env.EXPO_PUBLIC_IPADDR;
  const apiUrl =  "http://" + IPADDR +":3000/users";
  const navigation = useNavigation();
  
  const [selectedFriend, setSelectedFriend] = useState(null);

  const navigateToProfileScreen = (friend) => {
    navigation.navigate('FriendProfileDisplay', { friend });
  };

  return (
    <UserFetcher apiUrl={apiUrl} username={currentUser.username}>
      {(friends, error) => (
        <ScrollView contentContainerStyle={styles.container}>
          {error ? (
            <Text>Error fetching friends: {error}</Text>
          ) : (
            <>
              <Text style={styles.header}>Friends of {currentUser.name}</Text>
              {friends &&
                friends.map((friend) => (
                  <ProfileListItem
                    key={friend._id}
                    user={friend}
                    onPress={navigateToProfileScreen}
                  />
                ))}
            </>
          )}
        </ScrollView>
      )}
    </UserFetcher>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default FriendsScreen;
