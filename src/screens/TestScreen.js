import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, ScrollView } from 'react-native';
import axios from "axios";

const TestScreen = () => {
    // const [_name, setName] = useState("");
    // //const [_id, setId] = useState("");
    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
    // const [macros, setMacros] = useState("");

  
    const userData = {
        name: "post test",
        _id: "65c5959853fbd93fccce0659",
        username: "useryname",
        password: "passyword",
        //macros:"10",
      };
  
      axios
        .post("http://192.168.86.222:3000/addUser", userData)
        .then((response) => {
          Alert.alert(
            "Registration Successful",
            "You have been registered successfully"
          );
        //   setName("post test");
        //   //setId("");
        //   setUsername("useryname");
        //   setPassword("passyword");
        //   setMacros("10");
         
        })
        .catch((error) => {
          Alert.alert(
            "Registration Fail",
            "An error occurred during registration"
          );
          console.log("register failed", error);
        });
    return (
        <SafeAreaView>
            <ScrollView>
                {/* {users.map((user, index) => (
                    <><Text>MacroInputScreen</Text><Text key={index}>{user.name} - Macros: {user.macros}</Text></>
                ))} */}
            </ScrollView>
        </SafeAreaView>
    );
}

export default TestScreen;
