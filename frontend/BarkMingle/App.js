import * as React from 'react';
import StackNavigator from './StackNavigator';
import { InteractionManager } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './hooks/useAuth';


export default function App() {



  return (
    <NavigationContainer>

      <AuthProvider>
        <StackNavigator />
      </AuthProvider>

    </NavigationContainer>
  );
}


