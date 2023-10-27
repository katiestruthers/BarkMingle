import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

import { StreamChat } from 'stream-chat';
import { ChannelList } from 'stream-chat-expo';
import ChattingScreen from './ChattingScreen';
import { client } from '../StackNavigator';


/*
const user = {userObject}
const userID = `${user.id}`
const fullName = `${user.dogName} & ${user.firstName} ${user.lastName}`
const imageURL = `${user.img}`
*/

// function to connect user to Stream Chat
// export const connectUser = async (userID, fullName, imageURL) => {
//   await client.connectUser({
//     id: userID,
//     name: fullName,
//     image: imageURL
//   }, client.devToken(userID))
// };


// export const createChannel = async (userID, swipedUserID, swipedUserName, swipedUserImage) => {
//   const channelID = `${userID}--${swipedUserID}`
  
//   const channel = client.channel("messaging", channelID, 
//     {name: swipedUserName,
//     image: swipedUserImage,
//     members: [userID, swipedUserID]}
//   );
//   await channel.watch();
// };



const ChatIndex = () => {

   useEffect(() => {
    // connect the user 
    
    const connectUser = async () => {
      
      await client.connectUser({
        id: "doggo1",
        name: "Reg Setter",
        image: "https://www.dailypaws.com/thmb/j9_OHBJASDmmZP_q7EXzCP9QLsc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/irish-setter-lying-on-fence-145076420-2000-9c4dd89e0964492f92e9915bb71a4038.jpg"
      }, 
      client.devToken("doggo1")
      );

      const channel = client.channel("messaging", "doggo1-2", 
        {name: "Goldie Locks and John",
        image: "https://www.vidavetcare.com/wp-content/uploads/sites/234/2022/04/golden-retriever-dog-breed-info.jpeg",
        members: ["doggo1", "dogWalker"],
        text: "Click to chat"
        });
      
    await channel.watch();
   };

    connectUser();

    return () => {
      client.disconnectUser();
    }
  }, [])





  return (

        <ChattingScreen />
  );
};

export default ChatIndex