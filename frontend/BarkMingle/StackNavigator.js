import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import ChatScreen from './screens/ChatScreen';
import LandingScreen from './screens/LandingScreen';
import UserProfileScreen from './screens/UserProfileScreen';
import useAuth from './hooks/useAuth';
import MatchedScreen from './screens/MatchedScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import CreateDogProfileScreen from './screens/CreateDogProfileScreen';
import TraitsScreen from './screens/TraitsScreen';
import UploadScreen from './screens/UploadScreen';
import CreateUserProfileScreen from './screens/CreateUserProfileScreen';
import SwipedProfileScreen from './screens/SwipedProfile';

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
          <Stack.Group>
            <Stack.Screen name="Home" component={HomeScreen} /> 
            <Stack.Screen name="Chat" component={ChatScreen} />
            <Stack.Screen name="UserProfile" component={UserProfileScreen} />
          </Stack.Group>
          <Stack.Group screenOptions={{ presentation: "transparentModal"}}>
            <Stack.Screen name="Match" component={MatchedScreen}/>
          </Stack.Group>
          <Stack.Group screenOptions={{ presentation: "transparentModal"}}>
            <Stack.Screen name="SwipedProfile" component={SwipedProfileScreen}/>
          </Stack.Group>
      </> ) : 
      (
        <Stack.Group>
          <Stack.Screen name="GetStarted" component={LandingScreen} />
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="CreateDogProfile" component={CreateDogProfileScreen} />
          <Stack.Screen name="Traits" component={TraitsScreen} />
          <Stack.Screen name="Upload" component={UploadScreen} />
          <Stack.Screen name="CreateUserProfile" component={CreateUserProfileScreen} />
        </Stack.Group>
      
      )}
      
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