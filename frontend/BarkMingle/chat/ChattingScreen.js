import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

import { StreamChat, Channel } from 'stream-chat';
import { Chat, ChannelList, MessageList, MessageImput } from 'stream-chat-expo';


const ChattingScreen = () => {

  const navigation = useNavigation();
  const [ channel, setChannel ] = useState();

  if (channel) {
    return (
      <Channel channel={channel}>
        <MessageList />
        <MessageImput />
      </Channel>
    )
  }


  const filters = {
    members: {
      '$in': ["doggo1"]
    },
  };

  return (
      <ChannelList 
        onSelect={(channel) => {
          setChannel(channel)
        }}

        filters={filters}
      />
  )
};

export default ChattingScreen