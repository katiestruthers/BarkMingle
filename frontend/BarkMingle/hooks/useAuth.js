import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext({});

// Uses context API / Research context API
// Change user value to null (not a string to 'logout'/get to login screen)

export const AuthProvider = ( { children } ) => {
  const [token, setToken] = useState('');
  return (
    <AuthContext.Provider 
      value={{token, setToken}}> 
      { children }
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
};
