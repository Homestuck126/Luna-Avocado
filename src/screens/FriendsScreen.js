import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import ProfileListItem from "../components/ProfileListItem";
import UserFetcher from "../components/UserFetcher";
import { useNavigation } from '@react-navigation/native';
import axios from "axios";

const FriendsScreen = ({ currentUser }) => {
  const IPADDR = process.env.EXPO_PUBLIC_IPADDR;
  const apiUrl =  "http://" + IPADDR +":3000/users";
  const navigation = useNavigation();
  
  const [selectedFriend, setSelectedFriend] = useState(null);

  const navigateToProfileScreen = (friend) => {
    navigation.navigate('FriendProfileDisplay', { friend });
  };
  const handleAddFriend = () => {
    const _username =currentUser.username
    const updateData = {$push:{Friends: "AKLSJDKLASJD"}};
    const IPADDR = process.env.EXPO_PUBLIC_IPADDR;
    axios
      .patch("http://"+IPADDR+"3000/users/" + _username, updateData)
      .then((response) => {
          Alert.alert(
            "Registration Successful",
            "You have been registered successfully"
          );
        })
        .catch((error) => {
          Alert.alert(
            "Registration Fail",
            "An error occurred during registration"
          );
          console.log("register failed", error);
        });
  };
return (
    <UserFetcher apiUrl={apiUrl} username={currentUser.username}>
      {(friends, error) => (
        <ScrollView contentContainerStyle={styles.container}>
          <TouchableOpacity onPress={handleAddFriend} style={styles.addButton}>
            <Text style={styles.addButtonLabel}>Add Friend</Text>
          </TouchableOpacity>
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
    addButton: {
      backgroundColor: "#3498db", // or any color you prefer
      padding: 10,
      borderRadius: 5,
      marginBottom: 10,
    },
    addButtonLabel: {
      color: "#fff", // or any color that contrasts well
      fontSize: 16,
      fontWeight: "bold",
    },
});

export default FriendsScreen;
