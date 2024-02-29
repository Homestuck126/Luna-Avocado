import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, ScrollView } from 'react-native';

const MacroInputScreen = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/users') // Ensure the URL matches your server's configuration
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    return (
        <SafeAreaView>
            <ScrollView>
                {users.map((user, index) => (
                    <Text key={index}>{user.name} - Macros: {JSON.stringify(user.macro)}</Text>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}

export default MacroInputScreen;
