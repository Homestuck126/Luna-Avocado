import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FriendDetailScreen = ({ route }) => {
  const { friend } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{friend.name}'s Profile</Text>
      {/* Replace with your actual ProfileDetail or component for displaying friend details */}
      <View>
        <Text>{`Username: ${friend.username}`}</Text>
        <Text>{`bio: ${friend.bio}`}</Text>
        {/* Add more details as needed */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default FriendDetailScreen;
