import React, {createContext, useState, useContext} from 'react';
import {AuthData, authService} from '../services/authService.tsx';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState();
  //const [loading, setLoading] = useState(true);
//FIX
  const signIn = async (username, password) => {
    // Perform authentication logic and set user data
    
    const _authData = await authService.signIn(
      'test@email.com',
      '12345',
    );
    setAuthData(_authData)
  };

  const signOut = () => {
    // Perform sign-out logic
    setAuthData(undefined);
  };

  return (
    <AuthContext.Provider value={{ authData, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
