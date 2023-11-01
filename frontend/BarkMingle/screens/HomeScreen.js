import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native"; // can also use SafeAreaView from reg react-native if it looks better?
import styles from "../styles/homeStyles.js";
import appStyles from "../styles/appStyles.js";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faXmark,
  faHeart,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons/";
import Swiper from "react-native-deck-swiper";
import useAuth from "../hooks/useAuth.js";
import NavBar from "../components/NavBar.js";
import Axios from "axios";
import { AuthProvider } from "../hooks/useAuth.js";
import { StreamChat } from 'stream-chat';
import { CHAT_API_KEY } from "@env";
import FullScreenBgSvg from "../svg-images/FullScreenBgSvg.js";


  

const HomeScreen = () => {
  // Get user and JWT token from useAuth
  const { user, token } = useAuth();
  const headers = {
    authorization: `Bearer ${token}`,
  };

  const [matchedUserId, setMatchedUserId] = useState('');

  // Get chat client instance
  //const { client } = useChatContext;
  const client = StreamChat.getInstance(CHAT_API_KEY);


  // User Data for setting up chat client
  const userInfo = {
    id: `u${user.id}`,
    name: `${user.dog_name} & ${user.first_name} ${user.last_name}`,
    image: `${user.dog_img}`
  };
  
  const devToken = userInfo.id;


  const useChatClient = () => {
    const [clientIsReady, setClientIsReady] = useState(false);
  
    useEffect(() => {
      const setupClient = async () => {
        try {
          client.connectUser(userInfo, client.devToken(devToken));
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

  const { clientIsReady } = useChatClient();
  
  if (!clientIsReady) {
      return <Text>Loading chat...</Text>
    }


  // create channel if matchedUserId state changes:

  useEffect(() => {
    const createChannel = async () => {
        //const channelID = `${userID}--${swipedUserID}`
        console.log('inside createChannel!!!!');
        console.log('matchedUserId:', matchedUserId);
        
        const channel = client.channel('messaging', `u3--${matchedUserId}`, {  //try as members list channel
          members: ['u3', matchedUserId],
        });
        await channel.watch();
    };
    createChannel();
  }, [matchedUserId]);

 
 // to set state of non-user profiles
  const [filteredProfiles, setFilteredProfiles] = useState([]);

  appData = { user, filteredProfiles };

  // set state of profiles when user changes
  useEffect(() => {
    Axios.get("http://localhost:8080/api/feed/dogs", { headers })
      .then((response) => {
        setFilteredProfiles(response.data);
      })
      .catch((err) => console.log(err));
  }, [user]);

  useEffect(() => {
    Axios.get("http://localhost:8080/api/dogs/traits").then((response) => {
      setTraits(response.data);
    });
  }, []);

  const navigation = useNavigation();
  const swipeRef = useRef(null);

  // Helper functions to add to swipes & matches table //

  const swipeLeft = (cardIndex) => {
    const userSwiped = filteredProfiles[cardIndex];

    if (!userSwiped) return; // if no cards, just return

    const userSwipedId = userSwiped.id;
    console.log(
      `You swiped PASS on ${userSwiped.dog_name}, user id ${userSwipedId}`
    );

    // Add pass to swipes table
    Axios.post(
      `http://localhost:8080/api/feed/dogs/${userSwipedId}`,
      {
        swiped_by_user_id: user.id,
        swiped_user_id: userSwipedId,
        is_liked: false,
      },
      { headers }
    );
  };

  const swipeRight = (cardIndex) => {
    const userSwiped = filteredProfiles[cardIndex];

    if (!userSwiped) return; // if no cards, just return

    const userSwipedId = userSwiped.id;
    console.log(
      `You swiped LIKE on ${userSwiped.dog_name}, user id ${userSwipedId}`
    );

    // Get all likes received for current user
    // If received a like for userSwipedId, redirect to matches page
    Axios.get("http://localhost:8080/api/feed/likes", { headers })
      .then((res) => {
        const likesReceived = res.data;
        console.log("You've received the following likes:", likesReceived);
        if (likesReceived.includes(Number(userSwipedId))) {
          console.log(
            `You MATCHED with ${userSwiped.dog_name}, user id ${userSwipedId}!!!`
          );
          navigation.navigate("Match", { userSwiped });
        } else {
          console.log(`No match with ${userSwiped.dog_name}.`);
        }
      })
      .catch((error) => console.log(error));

    // Add like to swipes table
    // Will create a new instance on the matches table if mutual like
    Axios.post(
      `http://localhost:8080/api/feed/dogs/${userSwipedId}`,
      {
        swiped_by_user_id: user.id,
        swiped_user_id: userSwipedId,
        is_liked: true,
      },
      { headers }
    );
  };

  return (
    <View style={styles.flex}>
      <FullScreenBgSvg style={appStyles.backgroundFull} />
      <NavBar />
      {!filteredProfiles ? (
        <View style={styles.flex}>
          <Text>Sorry, there are no new profiles!</Text>
        </View>
      ) : (
        <>
          <View style={styles.flex}>
            <Swiper
              ref={swipeRef}
              containerStyle={{ backgroundColor: "transparent" }}
              cards={filteredProfiles}
              stackSize={1}
              cardIndex={0}
              animateCardOpacity
              verticalSwipe={false}
              onSwipedLeft={(cardIndex) => {
                swipeLeft(cardIndex);
              }}
              onSwipedRight={(cardIndex) => {
                swipeRight(cardIndex);
              }}
              overlayLabels={{
                left: {
                  title: "Pass",
                  style: {
                    label: {
                      textAlign: "right",
                      color: "#f83207",
                      fontFamily: "Baloo2_600SemiBold",
                    },
                  },
                },
                right: {
                  title: "Match",
                  style: {
                    label: {
                      textAlign: "left",
                      color: "#65d926",
                      fontFamily: "Baloo2_600SemiBold",
                    },
                  },
                },
              }}
              renderCard={(card) =>
                card ? (
                  <View style={styles.cards} key={card.id}>
                    <ImageBackground
                      style={styles.cardImage}
                      imageStyle={{ borderRadius: 20 }}
                      source={{ uri: card.dog_img }}
                    >
                      <View style={styles.spread}>
                        <TouchableOpacity
                          onPress={() =>
                            navigation.navigate("SwipedProfile", {
                              profile: card,
                            })
                          }
                        >
                        </TouchableOpacity>
                      </View>

                      <View style={styles.petInfoContainer}>
                        <View style={styles.text}>
                          <Text style={styles.name}>{card.dog_name}</Text>
                        </View>
                        <View style={styles.purpleContainer}>
                          <Text style={styles.textWhite}>
                            {card.dog_age} years old
                          </Text>
                        </View>
                      </View>
                      <View style={{ flexDirection: "row" }}>
                        <View style={styles.purpleContainer}>
                          <Text style={styles.textBlack}>
                            {card.dog_gender}
                          </Text>
                        </View>
                        <View style={styles.purpleContainer}>
                          <Text style={styles.textBlack}>{card.breed}</Text>
                        </View>
                        <View style={styles.purpleContainer}>
                          <Text style={styles.textBlack}>
                            {card.is_neutered ? "Fixed" : "Not Fixed"}
                          </Text>
                        </View>
                      </View>
                      <View style={{ flexDirection: "row" }}>
                        <View style={styles.purpleContainer}>
                          <Text style={styles.textWhite}>{card.trait_1}</Text>
                        </View>
                        <View style={styles.purpleContainer}>
                          <Text style={styles.textWhite}>{card.trait_2}</Text>
                        </View>
                        <View style={styles.purpleContainer}>
                          <Text style={styles.textWhite}>{card.trait_3}</Text>
                        </View>
                      </View>
                    </ImageBackground>

                    <View style={styles.humanProfileBox}>
                      <Image
                        source={{ uri: card.profile_img }}
                        style={styles.avatar}
                      />
                      <View style={styles.textContainer}>
                        <Text style={styles.textBlack}>
                          {`${card.first_name} ${card.last_name}`}
                        </Text>

                        <Text style={styles.textPurple}>{`${card.bio}`}</Text>
                      </View>
                    </View>
                  </View>
                ) : (
                  <View></View>
                )
              }
            />
          </View>

          <View style={styles.buttons}>
            <TouchableOpacity onPress={() => swipeRef.current.swipeLeft()}>
              <FontAwesomeIcon
                icon={faXmark}
                style={{ color: "#f83207" }}
                size={50}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => swipeRef.current.swipeRight()}>
              <FontAwesomeIcon
                icon={faHeart}
                size={50}
                style={{ color: "#65d926" }}
              />
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

export default HomeScreen;
