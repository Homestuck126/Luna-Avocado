import React from 'react';

const registerUser = async (username, password) => {
    try {
        // send a POST request to the registration endpoint on the server
        const response = await fetch('http://localhost:3000/register', {
            method: 'POST', //use the POST method to send data to the server
            headers: {
                'Content-Type': 'application/json', // specify that the request contains JSON data
            },
            body: JSON.stringify({ username, password }), // convert user data to JSON format and include it in the request body
        });
        
        // parse the response from the server as JSON
        const data = await response.json();

    // log the message received from the server
    console.log(data.message);
  } catch (error) {
    console.error("Error during registration:", error);
  }
};

const RegistrationScreen = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userBio, setUserBio] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
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
        <Pressable style={styles.button}>
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
