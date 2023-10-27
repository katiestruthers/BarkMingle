// useclient.js
import { useEffect, useState } from 'react';
import { StreamChat } from 'stream-chat';
// import { chatApiKey, chatUserId, chatUserName, chatUserToken } from '../chatConfig';
import { client } from '../StackNavigator'
const user =  {
  id: "doggo1",
  name: "Reg Setter",
  image: "https://www.dailypaws.com/thmb/j9_OHBJASDmmZP_q7EXzCP9QLsc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/irish-setter-lying-on-fence-145076420-2000-9c4dd89e0964492f92e9915bb71a4038.jpg"
};


export const useChatClient = () => {
  const [clientIsReady, setClientIsReady] = useState(false);

  useEffect(() => {
    const setupClient = async () => {
      try {
        client.connectUser(user, client.devToken(user.id));
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
