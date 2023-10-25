import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { View, Text } from 'react-native';
import { ChannelList } from 'stream-chat-expo';
import { chatApiKey, chatUserId } from '../chatConfig';

import { useAppContext } from '../AppContext';


const filters = {
  members: {
    '$in': [chatUserId]
  },
};

const sort = {
  last_message_at: -1,
};

const ChannelListScreen = (props) => {
  
  const { setChannel } = useAppContext();

  return (
          <ChannelList

            onSelect={(channel) => {
            const { navigation } = props;
            setChannel(channel);
            navigation.navigate('ChannelScreen');
          }}

            filters={filters}
            sort={sort}
          />


    )
};

export default ChannelListScreen;