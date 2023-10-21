import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import ChatScreen from './screens/ChatScreen';
import LandingScreen from './screens/LandingScreen';
import UserProfileScreen from './screens/UserProfileScreen';
import useAuth from './hooks/useAuth';
import MatchedScreen from './screens/MatchedScreen';

const Stack = createNativeStackNavigator();

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
      <Stack.Screen name="UserProfile" component={UserProfileScreen} />
      <Stack.Group screenOptions={{ presentation: "transparentModal"}}>
        <Stack.Screen name="Match" component={MatchedScreen}/>
      </Stack.Group>
      </> ) : 
      (<Stack.Screen name="LandingScreen" component={LandingScreen} />)}
      
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