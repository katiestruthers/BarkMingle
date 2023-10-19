// Authenticating using context API

import React, { createContext, useContext } from "react";
// import * as Google from "expo-google-app-auth";
// import { async } from "@firebase/util";
// import { log } from "util";

const AuthContext = createContext({});


// Change user value to null (not a string to 'logout'/get to login screen)

export const AuthProvider = ( {children} ) => {
  
  return (
  <AuthContext.Provider 
    value={{user: "null"}}> 
    { children }
  </AuthContext.Provider>);
};

export default function useAuth() {
  return useContext(AuthContext);
};

