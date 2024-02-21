import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View, Alert, SafeAreaView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { AuthProvider, useAuth } from '../contexts/Auth';

const LoginScreen = () => {
    const {signIn} = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false)
    const handleLogin = async () => {
        try {
            await signIn(username,password);
            console.log('No login errors');
        } catch (error){
            console.error('Login error', error);
        }
    }
    const toggleShowPassword = () => { 
        setShowPassword(!showPassword); 
    }; 
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.loginbox}>
                <Text style={styles.title}>Login or Sign Up</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder='username'
                        value={username}
                        onChangeText={(text) => setUsername(text)}
                        autoCapitalize='none'
                        textAlign='left'
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder='password'
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        autoCapitalize='none'
                        textAlign='left'
                        secureTextEntry={!showPassword}
                    />
                    <MaterialCommunityIcons 
                        name={showPassword ? 'eye-off' : 'eye'} 
                        size={24} 
                        color="#aaa"
                        style={styles.icon} 
                        onPress={toggleShowPassword} 
                    /> 
                </View>
                <Pressable style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Login</Text>
                </Pressable>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    inputContainer: { 
        flexDirection: 'row', 
        width:'80%',
        alignItems: 'center', 
        justifyContent: 'space-between', 
        backgroundColor: 'white', 
        borderRadius: 8, 
        paddingHorizontal: 14, 
    }, 
    loginbox: {
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-between',
        height:250,
        width:350,
        borderRadius:20,
        margin:20,
    },
    input: { 
        height:40,
        width:200,
        color: '#333', 
        paddingVertical: 10, 
        paddingRight: 10, 
        fontSize: 16, 
    }, 
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    icon: { 
        marginLeft: 10,
    },
    button : {
        backgroundColor: '#3498db',
        padding: 10,
        borderRadius: 8,
        width: '70%',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
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