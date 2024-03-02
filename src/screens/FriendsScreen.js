import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import ProfileListItem from "../components/ProfileListItem";
import { generateAvatar } from "../components/AvatarUtils";
import UserFetcher from "../components/UserFetcher";

const FriendsScreen = ({ currentUser }) => {
  const apiUrl = "http://10.10.9.53:3000/users";
  console.log("FriendsScreen rendered")
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
                    profile={generateAvatar(friend)}
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
