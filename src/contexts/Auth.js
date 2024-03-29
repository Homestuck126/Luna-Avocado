import React, { createContext, useState, useContext } from 'react';
import UserFetcher from '../components/UserFetcher';
import axios from 'axios';



const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const IPADDR = process.env.EXPO_PUBLIC_IPADDR;
  const apiUrl =  "http://" + IPADDR + ":3000/users";
  console.log(apiUrl)
  const [authData, setAuthData] = useState(false);
  const [userContext, setUserContext] = useState(null);

  const signIn = async (username, password) => {
    const checkPassword = (user) => {
      return user && user.password === password;
    };

    try {
      const response = await axios.get(apiUrl, { timeout: 10000 });
      const users = response.data.users;
      const matchingUser = users.find(index => index.username === username);
      if (matchingUser) {
        if (checkPassword(matchingUser)) {
          // Perform authentication logic and set user data
          setUserContext(matchingUser);
          setAuthData(true);
        } else {
          // Handle invalid username or password
          console.error("Invalid username or password");
        }
      }
    } catch (error) {
      console.error("Error during sign-in:", error);
      // Handle other errors (display a message, etc.)
    }
  };

  const signOut = () => {
    // Perform sign-out logic
    setAuthData(undefined);
  };

  return (
    <AuthContext.Provider value={{ authData, signIn, signOut, userContext, setUserContext }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return {
    authData: context.authData,
    signIn: context.signIn,
    signOut: context.signOut,
    userContext: context.userContext,
    setUserContext: context.setUserContext, // Make sure this is included
  };
};