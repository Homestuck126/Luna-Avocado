// ProfileScreen.js

import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { generateAvatar } from "../components/AvatarUtils"; // Adjust the path accordingly

const ProfileScreen = ({ user }) => {
  console.log("profile screen");
  console.log(user)
  const userProfile = generateAvatar(user);

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={userProfile.avatar} style={styles.avatar} />
        <Text style={styles.name}>{userProfile.name}</Text>
        <Text style={styles.bio}>{userProfile.bio}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  profileContainer: {
    alignItems: "center",
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  bio: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
});

export default ProfileScreen;
