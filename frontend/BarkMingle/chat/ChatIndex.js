import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

import { StreamChat } from 'stream-chat';
import { Chat, ChannelList, OverlayProvider } from 'stream-chat-expo';
import ChattingScreen from './ChattingScreen';

import {
  CHAT_API_KEY, 
  // CHAT_USER_ID, 
  // CHAT_USER_TOKEN, 
  // CHAT_USER_NAME,
  // STREAM_SECRET, 
} from "@env";
import useAuth from '../hooks/useAuth';

const client = StreamChat.getInstance(CHAT_API_KEY)

const ChatIndex = () => {

  const { token } = useAuth();

  // useEffect(() => {
  //   // connect the user 
    
  //   const connectUser = async () => {
      
  //     await client.connectUser({
  //       id: "doggo1",
  //       name: "Reg Setter",
  //       image: "https://www.dailypaws.com/thmb/j9_OHBJASDmmZP_q7EXzCP9QLsc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/irish-setter-lying-on-fence-145076420-2000-9c4dd89e0964492f92e9915bb71a4038.jpg"
  //     }, 
  //     client.devToken("doggo1")
  //     );

  //     const channel = client.channel("messaging", "doggo1-2", 
  //       {name: "Goldie Locks and John",
  //       image: "https://www.vidavetcare.com/wp-content/uploads/sites/234/2022/04/golden-retriever-dog-breed-info.jpeg",
  //       members: ["doggo1", "dogWalker"],
  //       text: "Click to chat"
  //       });
  //     console.log("CREATE CHANNEL 2")
      
  //   await channel.watch();
  //   console.log("CREATE CHANNEL 3")
  //  };

  //   connectUser();

  //   return () => {
  //     client.disconnectUser();
  //   }
  // }, [])

  /*

  - import swipeduser info from Home Screen

  const createChannel = async () => {
    const channel = client.channel("messaging",  )
  }
  */


  return (
    <OverlayProvider>
      <Chat client={client}>
        <ChattingScreen />
      </Chat>
    </OverlayProvider>
  );
};

export default ChatIndex