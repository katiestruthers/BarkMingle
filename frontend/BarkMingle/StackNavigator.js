import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';
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
import MessageScreen from './screens/MessageScreen';

import ChannelListScreen from './screens/ChannelListScreen';
import ChannelScreen from './screens/ChannelScreen';

// import { useChatClient } from './hooks/useChatClient';
// import { Text } from 'react-native';
import { StreamChat } from 'stream-chat';
import { Chat, OverlayProvider } from 'stream-chat-expo';
import ChatIndex from './chat/ChatIndex';

import {
  CHAT_API_KEY, 
  // CHAT_USER_ID, 
  // CHAT_USER_TOKEN, 
  // CHAT_USER_NAME,
  // STREAM_SECRET, 
} from "@env";

export const client = StreamChat.getInstance(CHAT_API_KEY)

const Stack = createStackNavigator();

const StackNavigator = () => {

  //const { user } = useAuth();

  const user = true;

  return (
    <OverlayProvider>
      <Chat client={client}>
  
        <Stack.Navigator 
          screenOptions={{
            // To remove default header on every screen:
            headerShown: false,
          }}>


          <Stack.Group screenOptions={{headerShown: true}} >

                <Stack.Screen name="Matches" component={ChannelListScreen} />
                <Stack.Screen name="Chatting" component={ChannelScreen} />

                <Stack.Screen name="Chat Screen" component={ChatIndex} options={{title: "Matches"}}/>

          </Stack.Group>

          
          <Stack.Group>
            <Stack.Screen name="Home" component={HomeScreen} /> 
            <Stack.Screen name="UserProfile" component={UserProfileScreen} />
          </Stack.Group>


          <Stack.Group>
              <Stack.Screen name="GetStarted" component={LandingScreen} />
              <Stack.Screen name="SignIn" component={SignInScreen} />
              <Stack.Screen name="SignUp" component={SignUpScreen} />
              <Stack.Screen name="CreateDogProfile" component={CreateDogProfileScreen} />
              <Stack.Screen name="Traits" component={TraitsScreen} />
              <Stack.Screen name="Upload" component={UploadScreen} />
              <Stack.Screen name="CreateUserProfile" component={CreateUserProfileScreen} />
          </Stack.Group>
      



          <Stack.Group screenOptions={{ presentation: "transparentModal"}}>
            <Stack.Screen name="Match" component={MatchedScreen}/>
          </Stack.Group>
          <Stack.Group screenOptions={{ presentation: "modal"}}>
            <Stack.Screen name="SwipedProfile" component={SwipedProfileScreen}/>
          </Stack.Group>

          
              
              <Stack.Group>
                <Stack.Screen name="Chat" component={ChatScreen} />
                <Stack.Screen name="Message" component={MessageScreen} />
              </Stack.Group>

        </Stack.Navigator>

      </Chat>
    </OverlayProvider>

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