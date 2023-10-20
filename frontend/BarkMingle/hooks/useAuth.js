import React, { createContext, useContext } from 'react';

const AuthContext = createContext({});

// Uses context API / Research context API
// Change user value to null (not a string to 'logout'/get to login screen)

export const AuthProvider = ( { children } ) => {
  return (
    <AuthContext.Provider 
      value={{user: null}}> 
      { children }
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
};
