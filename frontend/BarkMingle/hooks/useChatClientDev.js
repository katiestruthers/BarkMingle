// useclient.js
import { useEffect, useState } from 'react';
import { StreamChat } from 'stream-chat';
// import { client } from '../StackNavigator'
// import { chatApiKey, chatUserId, chatUserName, chatUserToken } from '../chatConfig';

import { chatApiKey } from '../chatConfig';
import useAuth from './useAuth';

// const { user } = useAuth();

export const client = StreamChat.getInstance(chatApiKey);

/*
const userInfo = {
  id: `${user.id}`,
  name: `${user.dogName} & ${user.first_name} ${user.last_name}`,
  image: `${user.img}`
}

*/
const userInfo =  {
  id: "doggo4",
  name: "Jane Doe",
  image: "https://media.npr.org/assets/img/2022/11/23/russian-toy-2-3-_custom-fd300880a9643efca73031d33f38ca7f4054b710.jpg"
};


export const useChatClient = () => {
  const [clientIsReady, setClientIsReady] = useState(false);

  useEffect(() => {
    const setupClient = async () => {
      try {
        client.connectUser(userInfo, client.devToken("doggo4"));
        setClientIsReady(true);

        // connectUser is an async function. So you can choose to await for it or not depending on your use case (e.g. to show custom loading indicator)
        // But in case you need the chat to load from offline storage first then you should render chat components
        // immediately after calling `connectUser()`.
        // BUT ITS NECESSARY TO CALL connectUser FIRST IN ANY CASE.
      } catch (error) {
        if (error instanceof Error) {
          console.error(`An error occurred while connecting the user: ${error.message}`);
        }
      }
    };

    // If the chat client has a value in the field `userID`, a user is already connected
    // and we can skip trying to connect the user again.
    if (!client.userID) {
      setupClient();
    }
  }, []);

  return {
    clientIsReady,
  };
};
