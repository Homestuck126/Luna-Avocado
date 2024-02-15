import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, Alert } from 'react-native';
import { AuthProvider, useAuth } from '../contexts/Auth';

const LoginScreen = () => {
    const {signIn} = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = async () => {
        try {
            await signIn(username,password);
            console.log('Login successful');
        } catch (error){
            console.error('Login error', error);
        }
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.loginbox}>
                <Text style={styles.title}>Login or Sign Up</Text>
                <TextInput
                    style={styles.input}
                    placeholder='username'
                    value={username}
                    onChangeText={(text) => setUsername(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder='password'
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
                <Button title='Login' onPress={handleLogin} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        flexDirection:'column',
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
        paddingBottom:200,
    },
    loginbox: {
        alignItems:'center',
        justifyContent:'center',
        aspectRatio: 2 / 1,
        width:200,
        borderRadius:20,
        backgroundColor:'#fff0f5',
    },
    input : {
        
    },
    title : {
        fontFamily: 'WorkSans',
    },
    button : {

    }
})
export default LoginScreen;
/*
const handleLogin = async (username, password) => {
    try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });
    
            const data = await response.json();
    
            if(response.ok) {
                //change login value
            } else {
                Alert.alert('Login Failed', data.message);
            }

        } catch(error) {
            console.error('Error during login:', error);
            Alert.alert('Error', 'An error occurred during login');
        }        
};
*/