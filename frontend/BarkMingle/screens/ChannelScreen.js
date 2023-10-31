import React from 'react';
import { Channel, MessageList, MessageInput, } from 'stream-chat-expo';
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