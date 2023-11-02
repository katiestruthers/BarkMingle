// useclient.js

import { useEffect, useState } from 'react';
import { StreamChat } from 'stream-chat';
import useAuth from './useAuth';

import {  chatApiKey, 
          chatUserId, 
          chatUserToken,
          chatUserName,
          chatUserImage } from '../chatConfig';


export const client = StreamChat.getInstance(chatApiKey);


// SET USER DATA IN chatConfig.js 


export const useChatClient = () => {
  const [clientIsReady, setClientIsReady] = useState(false);
  const { user } = useAuth();

  const userInfo = {
    id: `u${user.id}`,
    name: `${user.dog_name} & ${user.first_name} ${user.last_name}`,
    image: user.dog_img
  };
  console.log('userInfo:', userInfo);
  
  const devToken = userInfo.id;

  // useEffect(() => {
  //   const setupClient = async (userInfo, devToken) => {
  //     try {
  //       client.connectUser(userInfo, client.devToken(devToken));
  //       setClientIsReady(true);

  //       // connectUser is an async function. So you can choose to await for it or not depending on your use case (e.g. to show custom loading indicator)
  //       // But in case you need the chat to load from offline storage first then you should render chat components
  //       // immediately after calling `connectUser()`.
  //       // BUT ITS NECESSARY TO CALL connectUser FIRST IN ANY CASE.
  //     } catch (error) {
  //       if (error instanceof Error) {
  //         console.error(`An error occurred while connecting the user: ${error.message}`);
  //       }
  //     }
  //     console.log('in setup client, userInfo:', userInfo);
  //     console.log('in setup client, devToken:', devToken);
  //   };

  //   // If the chat client has a value in the field `userID`, a user is already connected
  //   // and we can skip trying to connect the user again.
  //   if (!client.userID) {
  //     setupClient();
  //   }
  // }, [user]);

  return {
    clientIsReady,
  };
};



// IN HOMESCREEN
// export const createChannel = async (userID, swipedUserID, swipedUserName, swipedUserImage) => {
//   //const channelID = `${userID}--${swipedUserID}`
  
//   const channel = client.channel("messaging", 
//     {name: swipedUserName,
//     image: swipedUserImage,
//     members: [userID, swipedUserID]}
//   );
//   await channel.watch();
// };


// IN USEERPROFILE SCREEN
// export const disconnectUser = async () => {
//   await client.disconnectUser();
// };
