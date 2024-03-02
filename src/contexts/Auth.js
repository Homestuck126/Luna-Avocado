import React, {createContext, useState, useContext} from 'react';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState(false);
  //const [loading, setLoading] = useState(true);
//FIX
  const signIn = async (username, password) => {
    // Perform authentication logic and set user data
    
    if (username == '' && password == '' )
    setAuthData(true)
  };

  const signOut = () => {
    // Perform sign-out logic
    setAuthData(undefined);
  };

  return (
    <AuthContext.Provider value={{ authData, signIn, signOut }}>
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
