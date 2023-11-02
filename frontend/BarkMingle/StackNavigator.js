import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
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
import CompletionScreen from './screens/CompletionScreen';
import EditUserProfileScreen from './screens/EditUserProfileScreen'
import ChannelListScreen from './screens/ChannelListScreen';
import ChannelScreen from './screens/ChannelScreen';
import { StreamChat } from 'stream-chat';
import { CHAT_API_KEY } from "@env";
import { useChatClient, createChannel } from './hooks/useChatClientDev.js';

import { Chat } from 'stream-chat-expo';
// import {  chatApiKey } from '../chatConfig';

const client = StreamChat.getInstance(CHAT_API_KEY);

const Stack = createStackNavigator();

const StackNavigator = () => {
  const { user } = useAuth(); // or const token = true  to visit other pages
  const [ token ] = useState('');
  const headers = {
    authorization: `Bearer ${token}`,
  };

  // const userInfo = {
  //   id: `u${user.id}`,
  //   name: user.first_name,
  //   image: user.profile_img
  // };

  // const devToken = userInfo.id;

  // // MOVED TO HOME SCREEN
  // const { clientIsReady } = useChatClient(userInfo, devToken);

  // if (!clientIsReady) {
  //   return <Text>Loading chat...</Text>
  // }

  return (
    <Chat client={client}>
    <Stack.Navigator 
      screenOptions={{
        // To remove default header on every screen:
        headerShown: false,
      }}>
        <>
          <Stack.Group>
            <Stack.Screen name="GetStarted" component={LandingScreen} />
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="CreateDogProfile" component={CreateDogProfileScreen} />
            <Stack.Screen name="Traits" component={TraitsScreen} />
            <Stack.Screen name="Upload" component={UploadScreen} />
            <Stack.Screen name="CreateUserProfile" component={CreateUserProfileScreen} />
            <Stack.Screen name="Completion" component={CompletionScreen} />
          </Stack.Group>
        
          <Stack.Group>
            <Stack.Screen name="Home" component={HomeScreen} /> 
            <Stack.Screen name="UserProfile" component={UserProfileScreen} />
            <Stack.Screen name="EditUserProfile" component={EditUserProfileScreen} />
          </Stack.Group>

          <Stack.Group screenOptions={{headerShown: true}} >
            <Stack.Screen name="ChannelList" component={ChannelListScreen} options={{title: "Matches"}}/>
            <Stack.Screen name="ChannelScreen" component={ChannelScreen} options={{title: "Messages"}}/>
          </Stack.Group>
          
          <Stack.Group screenOptions={{ presentation: "transparentModal"}}>
            <Stack.Screen name="Match" component={MatchedScreen}/>
          </Stack.Group>
          <Stack.Group screenOptions={{ presentation: "modal"}}>
            <Stack.Screen name="SwipedProfile" component={SwipedProfileScreen}/>
          </Stack.Group>
        </>
    </Stack.Navigator>
    </Chat>
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