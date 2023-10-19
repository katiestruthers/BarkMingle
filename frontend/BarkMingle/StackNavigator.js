import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { View, Text } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import ChatScreen from "./screens/ChatScreen";
import LoginScreen from "./screens/LoginScreen";
import useAuth from "./hooks/useAuth";
import UserProfile from "./screens/UserProfileScreen";

const Stack = createNativeStackNavigator();

// create stack of 'route' components

const StackNavigator = () => {
  
  const { user } = useAuth();

  return (
    <Stack.Navigator 
      screenOptions={{
        // To remove default header on every screen:
        headerShown: false,
      }}>
      {user ? (
        <>
      <Stack.Screen name="Home" component={HomeScreen} /> 
      <Stack.Screen name="Chat" component={ChatScreen} />
      <Stack.Screen name="UserProfile" component={UserProfile} />
      </> ) : 
      (<Stack.Screen name="Login" component={LoginScreen} />)}
      
    </Stack.Navigator>
  )
}

export default StackNavigator