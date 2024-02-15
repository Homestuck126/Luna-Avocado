import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { Router } from './src/routes/Router.js';
import {AuthProvider} from './src/contexts/Auth.js';


export default function App() {
  return (
    
    <AuthProvider>
      <Router></Router>
    </AuthProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});