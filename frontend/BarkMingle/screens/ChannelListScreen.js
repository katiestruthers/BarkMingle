import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { View, Text } from 'react-native';
import { ChannelList } from 'stream-chat-expo';
import { user } from '../hooks/useAuth;'

import { useAppContext } from '../AppContext';


const ChannelListScreen = (props) => {

  const { setChannel } = useAppContext();

  const { user } = useAuth();
  const chatUserId = `u${user.id}`

  const filters = {
    members: {
      '$in': [chatUserId]
    },
  };
  
  
  const sort = {
    last_message_at: -1,
  };


  return (
        <>
          <ChannelList
            onSelect={(channel) => {
            const { navigation } = props;
            setChannel(channel);
            navigation.navigate('Chatting');
          }}

            filters={filters}
            sort={sort}
          />

        </>


    )
};

export default ChannelListScreen;