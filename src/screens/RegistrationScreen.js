import React, { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const IPADDR = process.env.EXPO_PUBLIC_IPADDR;

const RegistrationScreen = (props) => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userBio, setUserBio] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const apiUrl = "http://" + IPADDR + ":3000/addUser";
  const handleSignup = async () => {
    const userData = {
      name: username,
      username: username,
      password: password,
      bio: userBio,
      calories: 0,
      protein: 0,
      carbohydrate: 0,
      fats: 0,
      calorieGoal: 2000,
      proteinGoal: 150,
      carbGoal: 200,
      fatsGoal: 50,
    };
    console.log(userData);
    axios
      .post(apiUrl, userData)
      .then((response) => {
        Alert.alert("Registration Successful", "Redirecting to Login Screen", [
          {
            text: "Continue",
            onPress: () => {
              navigation.navigate("Login");
            },
          },
        ]);
        console.log("SUCCESS");
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
    <SafeAreaView style={styles.container}>
      <View style={styles.loginbox}>
        <Text style={styles.title}>Sign Up</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="username"
            value={username}
            onChangeText={(text) => setUsername(text)}
            autoCapitalize="none"
            textAlign="left"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            autoCapitalize="none"
            textAlign="left"
            secureTextEntry={!showPassword}
          />
          <MaterialCommunityIcons
            name={showPassword ? "eye-off" : "eye"}
            size={24}
            color="#aaa"
            style={styles.icon}
            onPress={toggleShowPassword}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="user bio"
            value={userBio}
            onChangeText={(text) => setUserBio(text)}
            autoCapitalize="none"
            textAlign="left"
          />
        </View>
        <Pressable style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  inputContainer: {
    flexDirection: "row",
    width: "80%",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    borderRadius: 8,
    paddingHorizontal: 14,
  },
  loginbox: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    height: 250,
    width: 350,
    borderRadius: 20,
    margin: 20,
  },
  input: {
    height: 40,
    width: 200,
    color: "#333",
    paddingVertical: 10,
    paddingRight: 10,
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  icon: {
    marginLeft: 10,
  },
  button: {
    backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 8,
    width: "70%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
