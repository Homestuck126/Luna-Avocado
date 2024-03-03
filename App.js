import React from 'react';
import 'react-native-gesture-handler';
import { Router } from './src/routes/Router.js';
import {AuthProvider} from './src/contexts/Auth.js';
import MacroInputScreen from './src/screens/MacroInputScreen.js';
import TestScreen from './src/screens/TestScreen.js';

export default function App() {
  return (
    <TestScreen></TestScreen>
    //<MacroInputScreen></MacroInputScreen>
    // <AuthProvider>
    //   <Router></Router>
    // </AuthProvider>
  );
}