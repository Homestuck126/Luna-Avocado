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
        //name: "post12 test",
        name: "post13 test",
        username: "useryname",
        password: "passyword",
        macros: 25,
        bio: "lalalala",
        Friends: new Array("hello")
      };

      //_name: add what the name of the student you want to update
      const _name ="Test2 Student"
      // if you want to update Friends {$push:{Friends: "hello new friends"}}, if you want to update macros {$ser:{macros: num}}
      const updateData = {$push:{Friends: "hello new friends"}};
      axios
        .patch(`http://192.168.86.222:3000/users/${_name}`, updateData)
        .then((response) => {
          Alert.alert(
            "Registration Successful",
            "You have been registered successfully"
          );
        // setName("name test");
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
    //   axios
    //     .post("http://192.168.86.222:3000/addUser", userData)
    //     .then((response) => {
    //       Alert.alert(
    //         "Registration Successful",
    //         "You have been registered successfully"
    //       );
    //     // setName("name test");
    //     //   //setId("");
    //     //   setUsername("useryname");
    //     //   setPassword("passyword");
    //     //   setMacros("10");
         
    //     })
    //     .catch((error) => {
    //       Alert.alert(
    //         "Registration Fail",
    //         "An error occurred during registration"
    //       );
    //       console.log("register failed", error);
    //     });
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
