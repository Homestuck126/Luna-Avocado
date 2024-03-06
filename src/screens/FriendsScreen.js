import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import ProfileListItem from "../components/ProfileListItem";
import UserFetcher from "../components/UserFetcher";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const FriendsScreen = ({ currentUser }) => {
  const [newFriendUserName, setNewFriendUserName] = useState();

  const IPADDR = process.env.EXPO_PUBLIC_IPADDR;
  const apiUrl = "http://" + IPADDR + ":3000/users";
  const navigation = useNavigation();

  const [selectedFriend, setSelectedFriend] = useState(null);

  const navigateToProfileScreen = (friend) => {
    navigation.navigate("FriendProfileDisplay", { friend });
  };
  const handleAddFriend = (friendName) => {
    console.log(friendName);
    const _username = currentUser.username;
    const updateData = { $push: { Friends: friendName } };
    const IPADDR = process.env.EXPO_PUBLIC_IPADDR;
    const temp = `http://` + IPADDR + `:3000/users/${_username}`;
    //console.log(temp);
    axios
      .patch(temp, updateData)
      .then((response) => {
        Alert.alert(
          "Friend added Successfully",
          "Your friend has been added"
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
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="username here"
          value={newFriendUserName}
          onChangeText={(text) => {
            setNewFriendUserName(text);
          }}
          autoCapitalize="none"
          textAlign="left"
        />
      </View>
      <TouchableOpacity
        onPress={() => handleAddFriend(newFriendUserName)}
        style={styles.addButton}
      >
        <Text style={styles.addButtonLabel}>Add Friend</Text>
      </TouchableOpacity>
      <UserFetcher apiUrl={apiUrl} username={currentUser.username}>
        {(friends, error) => (
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
      </UserFetcher>
    </ScrollView>
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
  inputContainer: {
    flexDirection: "row",
    width: "60%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 8,
    paddingHorizontal: 14,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    color: "#333",
    paddingVertical: 10,
    paddingRight: 10,
    fontSize: 16,
  },
});

export default FriendsScreen;
