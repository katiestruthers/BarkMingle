import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

import { StreamChat } from 'stream-chat';
import { Chat, ChannelList } from 'stream-chat-expo';


const ChattingScreen = () => {

  const filters = {
    members: {
      '$in': ["doggo1"]
    },
  };

  return (
      <ChannelList 

        filters={filters}
      />
  )
};

export default ChattingScreen