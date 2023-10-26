import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/core';
import { View, Text } from 'react-native';
import { ChannelList } from 'stream-chat-expo';
import { chatUserId, chatUserName } from '../chatConfig';
import { Chat } from 'stream-chat-expo';
import { StreamChat } from 'stream-chat';
import { useChatClient } from '../hooks/useChatClient';
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

  useEffect(() => {
    // connect the user to chat stream
  
    const connectUser = async () => {
      await chatClient.connectUser(
        {
          id: "1",
          name: "Fido & Alan",
          image: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg'
        }, 
        chatClient.devToken("1")
      );

      const channel = chatClient.channel("messaging", "match", {name: "Match"});

      await channel.create();
    };

    connectUser();
  
    return () => {
      chatClient.disconnectUser();
    };
  }, [])

  // const { clientIsReady } = useChatClient();

  // console.log("IS CLIENT READY:", clientIsReady)

  // if (!clientIsReady) {
  //   return <Text>Loading chat ...</Text>
  // }

  return (
      <Chat client={chatClient}>
          <ChannelList
            onSelect={(channel) => {
            const { navigation } = props;
            setChannel(channel);
            navigation.navigate('Chatting');
          }}

            filters={filters}
            sort={sort}
          />

        </Chat>


    )
};

export default ChannelListScreen;