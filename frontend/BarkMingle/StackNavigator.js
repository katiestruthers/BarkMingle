import { createNativeStackNavigator } from '@react-navigation/native-stack';
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

import ChannelListScreen from './screens/ChannelListScreen';

import { useChatClient } from './hooks/useChatClient';
import { Text } from 'react-native';

import { Chat } from 'stream-chat-expo';
import { StreamChat } from 'stream-chat';
import { chatApiKey } from './chatConfig';
import ChannelScreen from './screens/ChannelScreen';

const chatClient = StreamChat.getInstance(chatApiKey);


const Stack = createStackNavigator();

const StackNavigator = () => {
  //const { user } = useAuth(); or  // or const token = true  to visit other pages
  const [token ] = useState('');
  const headers = {
    authorization: `Bearer ${token}`,
  };

  const { clientIsReady } = useChatClient();

  if (!clientIsReady) {
    return <Text>Loading chat ...</Text>
  }

  return (
    <Chat client={chatClient}>
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
          </Stack.Group>

          <Stack.Group screenOptions={{headerShown: true}} >
            <Stack.Screen name="Matches" component={ChannelListScreen} />
            <Stack.Screen name="Chatting" component={ChannelScreen} />
          </Stack.Group>
          
          <Stack.Group>
            <Stack.Screen name="Chat" component={ChatScreen} />
            <Stack.Screen name="Message" component={MessageScreen} />
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