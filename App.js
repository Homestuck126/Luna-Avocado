import React from 'react';
import 'react-native-gesture-handler';
import { Router } from './src/routes/Router.js';
import {AuthProvider} from './src/contexts/Auth.js';

export default function App() {
  return (
    <AuthProvider>
      <Router></Router>
    </AuthProvider>
  );
}
