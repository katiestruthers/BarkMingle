import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { View, Text } from 'react-native';
import { ChannelList } from 'stream-chat-expo';
import { chatUserId } from '../chatConfig';

import { useAppContext } from '../AppContext';
import useAuth from '../hooks/useAuth';

const ChannelListScreen = (props) => {
  const { user } = useAuth();

  const { setChannel } = useAppContext();

  const filters = {
    members: {
      '$in': [`u${user.id}`]
    },
  };
  
  const sort = {
    last_message_at: -1,
  };
  

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