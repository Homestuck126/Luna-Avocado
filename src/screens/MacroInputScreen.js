import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, ScrollView } from 'react-native';
import axios from "axios";

const MacroInputScreen = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const fetchUserData = async () => {
          try {
            const response = await axios.get("http://10.13.3.209:3000/users", { timeout: 10000 });
            
            setUsers(response.data);
          } catch (error) {
            console.log("hello", error)
          }
        };
        fetchUserData();
    }, []);
    console.log("users",users);
    return (
        <SafeAreaView>
            <ScrollView>
                {users.map((user, index) => (
                  
                    <Text key={index}>{user.name} - Macros: {user.macros}</Text>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}

export default MacroInputScreen;