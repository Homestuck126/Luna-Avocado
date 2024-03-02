// FriendsScreen.js
import React, { useEffect, useState }  from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import ProfileListItem from "../components/ProfileListItem";
import axios from "axios";

const FriendsScreen = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
      const fetchUserData = async () => {
        try {
          const response = await axios.get("http://localhost:3000/users", { timeout: 10000 });
          setUsers(response.data);
        } catch (error) {
          console.log("error fetching user data", error);
        }
      };
      fetchUserData();
  }, []);
  const navigation = useNavigation();
  const example = users.name
  console.log(example)
  // Example user profiles
  const temp = {
    id: 1,
    name: example,
    bio: "Frontend Developer",
    avatar: require("../assets/Cats/thincat1.jpg"),
  };
  const userProfiles = [
    temp,
    {
      id: 2,
      name: "Jane Smith",
      bio: "UX Designer",
      avatar: require("../assets/Cats/fatcat1.jpg"),
    },
    // Add more profiles as needed
  ];

  const navigateToProfileScreen = (profile) => {
    navigation.navigate("FriendProfileDisplay", { profile });
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
