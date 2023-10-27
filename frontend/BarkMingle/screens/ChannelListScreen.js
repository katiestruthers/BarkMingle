import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/core';
import { View, Text } from 'react-native';
import { Channel, ChannelList } from 'stream-chat-expo';
import { chatUserId, chatUserName } from '../chatConfig';
import { Chat } from 'stream-chat-expo';
import { StreamChat } from 'stream-chat';
import { useChatClient } from '../hooks/useChatClientDev';
import { useAppContext } from '../AppContext';

import { client } from '../StackNavigator';


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

  const { clientIsReady } = useChatClient();

  console.log("IS CLIENT READY:", clientIsReady)

  if (!clientIsReady) {
    return <Text>Loading chat ...</Text>
  }
  

  return (    
      
          <ChannelList
            onSelect={(channel) => {
            const { navigation } = props;
            setChannel(channel);
            navigation.navigate('Chatting');
          }}

            filters={filters}
            sort={sort}
          />
    
  


    )
};

export default ChannelListScreen;