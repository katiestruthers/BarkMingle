import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import ChatScreen from './screens/ChatScreen';
import LoginScreen from './screens/LoginScreen';
import UserProfileScreen from './screens/UserProfileScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {

  const user = true;

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
      <Stack.Screen name="UserProfile" component={UserProfileScreen} />
      </> ) : 
      (<Stack.Screen name="Login" component={LoginScreen} />)}
      
    </Stack.Navigator>
  )
}

export default StackNavigator



// import React from 'react';
// import { View, Text } from 'react-native';

// const StackNavigator = () => {
//   return (
//     <View> 
//       <Text></Text>
//     </View>

//   )
// };

// export default StackNavigator