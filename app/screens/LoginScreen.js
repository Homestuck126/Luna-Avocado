import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';


const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {

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
        fontFamily: 'work-sans',
    }
})
export default LoginScreen;