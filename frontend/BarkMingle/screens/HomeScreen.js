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
import { StreamChat } from "stream-chat";
import { CHAT_API_KEY } from "@env";
import FullScreenBgSvg from "../svg-images/FullScreenBgSvg.js";
import { useChatClient } from "../hooks/useChatClientDev.js";
import { LinearGradient } from "expo-linear-gradient";
import NoNewProfiles from "../components/NoNewProfiles.js";

const HomeScreen = () => {
  // Get user and JWT token from useAuth
  const { user, token } = useAuth();
  const headers = {
    authorization: `Bearer ${token}`,
  };

  const [matchedUserId, setMatchedUserId] = useState("");

  // Get chat client instance
  //const { client } = useChatContext;
  const client = StreamChat.getInstance(CHAT_API_KEY);

  useEffect(() => {
    const setupClient = async () => {
      const userInfo = {
        id: `u${user.id}`,
        name: `${user.dog_name} & ${user.first_name} ${user.last_name}`,
        image: `${user.dog_img}`,
      };
      const devToken = userInfo.id;
      try {
        client.connectUser(userInfo, client.devToken(devToken));
        // setClientIsReady(true);

        // connectUser is an async function. So you can choose to await for it or not depending on your use case (e.g. to show custom loading indicator)
        // But in case you need the chat to load from offline storage first then you should render chat components
        // immediately after calling `connectUser()`.
        // BUT ITS NECESSARY TO CALL connectUser FIRST IN ANY CASE.
      } catch (error) {
        if (error instanceof Error) {
          console.error(
            `An error occurred while connecting the user: ${error.message}`
          );
        }
      }
      console.log("in setup client, userInfo:", userInfo);
      console.log("in setup client, devToken:", devToken);
    };

    // If the chat client has a value in the field `userID`, a user is already connected
    // and we can skip trying to connect the user again.
    if (!client.userID) {
      setupClient();
    }
  }, []);

  useEffect(() => {
    const createChannel = async () => {
      const userId = `u${user.id}`;
      const channelId = `${userId}--${matchedUserId}`;
      console.log("userId:", userId);
      console.log("channelId:", channelId);

      const channel = client.channel("messaging", channelId, {
        //try as members list channel  `u3--${matchedUserId}`
        members: [userId, matchedUserId],
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
          setMatchedUserId(`u${userSwipedId}`);
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

  // Helper function for displaying a dog's age
  const dogAgeText = (age) => {
    switch (age) {
      case 0:
        return "Less than a year";
      case 1:
        return "1 year old";
      case 14:
        return "13+ years old";
      default:
        return `${age} years old`;
    }
  };

  return (
    <View style={styles.flex}>
      <FullScreenBgSvg style={appStyles.backgroundFull} />
      {!filteredProfiles ? (
        <View style={{paddingTop: 80, flex: 1 }}>
        <NoNewProfiles />
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
                      <LinearGradient
                        colors={["transparent", "rgba(0, 0, 0, 0.3)"]}
                        style={appStyles.linearGradient}
                      >
                        <View style={styles.spread}>
                          <TouchableOpacity
                            onPress={() =>
                              navigation.navigate("SwipedProfile", {
                                profile: card,
                              })
                            }
                          ></TouchableOpacity>
                        </View>
                        <View style={styles.petInfoContainer}>
                          <View style={{ flexDirection: "row" }}>
                            <Text style={styles.name}>{card.dog_name}</Text>
                            <View style={styles.purpleContainer}>
                              <Text style={styles.textWhite}>
                                {dogAgeText(card.dog_age)}
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
                              <Text style={styles.textWhite}>
                                {card.trait_1}
                              </Text>
                            </View>
                            <View style={styles.purpleContainer}>
                              <Text style={styles.textWhite}>
                                {card.trait_2}
                              </Text>
                            </View>
                            <View style={styles.purpleContainer}>
                              <Text style={styles.textWhite}>
                                {card.trait_3}
                              </Text>
                            </View>
                          </View>
                        </View>
                      </LinearGradient>
                    </ImageBackground>

                    <View style={styles.humanProfileBox}>
                      <View style={{ flexDirection: "row", flex: 1 }}>
                        <Image
                          source={{ uri: card.profile_img }}
                          style={styles.avatar}
                        />
                        <View style={styles.textContainer}>
                          <Text style={styles.textName}>
                            {`${card.first_name} ${card.last_name}`}
                          </Text>

                          <Text style={styles.textPurple}>{`${card.bio}`}</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                ) : (
                  <NoNewProfiles />
                )
              }
            />
          </View>
          <View style={styles.buttons}>
            <TouchableOpacity
              onPress={() => swipeRef.current.swipeLeft()}
              style={styles.buttonsCircle}
              disabled={!filteredProfiles}
            >
              <FontAwesomeIcon
                icon={faXmark}
                style={{ color: "#f83207" }}
                size={40}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => swipeRef.current.swipeRight()}
              style={styles.buttonsCircle}
              disabled={!filteredProfiles}
            >
              <FontAwesomeIcon
                icon={faHeart}
                size={40}
                style={{ color: "#65d926" }}
              />
            </TouchableOpacity>
          </View>
        </>
      )}

      <NavBar />
    </View>
  );
};

export default HomeScreen;
