import React from 'react';
import { View, Text } from 'react-native';
import { Channel, MessageList, MessageInput, } from 'stream-chat-expo';
import { chatApiKey, chatUserId } from '../chatConfig';

import { useAppContext } from '../AppContext';


const ChannelScreen = (props) => {

  const { channel } = useAppContext();

  return  (
    <Channel channel={channel}>
      <MessageList />
      <MessageInput />
    </Channel>
  );
};

export default ChannelScreen