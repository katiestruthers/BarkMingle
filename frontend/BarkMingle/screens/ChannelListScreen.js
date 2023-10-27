import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/core';
import { View, Text } from 'react-native';
import { Channel, ChannelList } from 'stream-chat-expo';
import { chatUserId, chatUserName } from '../chatConfig';
import { Chat } from 'stream-chat-expo';
import { StreamChat } from 'stream-chat';
import { useChatClient } from '../hooks/useChatClientDev';
import { useAppContext } from '../AppContext';


const chatApiKey = "9qpe5c2hwyun"
const chatClient = StreamChat.getInstance(chatApiKey);

console.log("OKAY")


const filters = {
  members: {
    '$in': ["1"]
  },
};



const sort = {
  last_message_at: -1,
};

const ChannelListScreen = (props) => {
  const { setChannel } = useAppContext();

  // useEffect(() => {
  //   // connect the user to chat stream
  
  //   const creatChannel = async () => {
  //     await chatClient.connectUser(
  //       {
  //         id: "1",
  //         name: "Fido & Alan",
  //         image: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg'
  //       }, 
  //       chatClient.devToken("1")
  //     );

  //     const channel = chatClient.channel("messaging", "match", 
  //     {name: "Match",
  //     image: "https://i.cbc.ca/1.4026455.1491334629!/fileImage/httpImage/image.JPG_gen/derivatives/16x9_780/magic-8-cea-sunrise-person.JPG"});

  //     await channel.create();
  //     setChannel(channel)
  //   };

  
  // }, [])

  const { clientIsReady } = useChatClient();

  console.log("IS CLIENT READY:", clientIsReady)

  if (!clientIsReady) {
    return <Text>Loading chat ...</Text>
  }

  return (
      <Chat client={chatClient}>
        <Text>CHANNEL LIST</Text>
          <Channel channel={channel}>
          <ChannelList
            onSelect={(channel) => {
            const { navigation } = props;
            setChannel(channel);
            navigation.navigate('Chatting');
          }}

            filters={filters}
            sort={sort}
          />
        </Channel>    
        </Chat>


    )
};

export default ChannelListScreen;