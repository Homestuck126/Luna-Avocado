import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import {AppStack, AuthStack} from './NavigationStacks.js';
import { useAuth } from '../contexts/Auth.js';
import { Loading } from '../components/Loading.js';

export const Router = () => {
  const {authData} = useAuth();
  
  return (
    <SafeAreaView style={{flex:1}}>
      <NavigationContainer>
        {authData ? <AppStack /> : <AuthStack />}
      </NavigationContainer>
    </SafeAreaView>
  );
};

