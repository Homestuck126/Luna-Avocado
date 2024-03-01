import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, ScrollView } from 'react-native';
import axios from "axios";
import { useRouter } from "expo-router";

const MacroInputScreen = () => {
    const [users, setUsers] = useState([]);
    const router = useRouter();
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
    console.log(users);
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
