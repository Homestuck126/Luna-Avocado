import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppStack, AuthStack} from 'NavigationStacks.js';
import { useAuth } from '../contexts/Auth';
import { Loading } from '../components/Loading';

export const Router = () => {
  const {authData} = useAuth();
  
  return (
    <NavigationContainer>
      {authData ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};