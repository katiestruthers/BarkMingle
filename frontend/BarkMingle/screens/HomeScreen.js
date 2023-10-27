import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import {View, Text, ImageBackground, TouchableOpacity, Image} from 'react-native'; // can also use SafeAreaView from reg react-native if it looks better?
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from "../styles/homeStyles.js" 
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { faDog } from '@fortawesome/free-solid-svg-icons/faDog';
import { faPaw } from '@fortawesome/free-solid-svg-icons/faPaw';
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';
import { faHeart } from '@fortawesome/free-solid-svg-icons/faHeart';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons/faCircleInfo';
import Swiper from "react-native-deck-swiper";
import { filterProfiles, getUserProfile } from "../dummyData/dummyData.js"
import useAuth from '../hooks/useAuth.js';
import NavBar from '../components/NavBar.js';
import Axios from "axios";
// import { client } from '../StackNavigator.js';



import { AuthProvider } from "../hooks/useAuth.js";
import { StreamChat } from 'stream-chat';
import { connectUser, createChannel } from '../chat/ChatIndex.js';
import { useChatClient } from '../hooks/useChatClientDev';



export const usersMatchArray = [];
export const userMatchDetailsArray = [];
export const swipedUser = [];

export let appData = {};

// const chatApiKey = "9qpe5c2hwyun"
// const client = StreamChat.getInstance(chatApiKey);

const HomeScreen = () => {
  

// function call to connect the user to Stream Chat

/*
const { user } = useAuth();

const userID = `${user.id}`
const userFullName = `${user.dogName} & ${user.firstName} ${user.lastName}`
const userImageURL = `${user.img}`


const userID = `101`
const userFullName = `Rosie & Flora Brown`
const userImageURL = `https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/07/top-20-small-dog-breeds.jpeg.jpg`

  useEffect(() => {
    connectUser(userID, userFullName, userImageURL);

    return () => {
      client.disconnectUser();
    }
  }, []);
*/


 

  // to set state of user profile
  const [userProfile, setUserProfile] = useState([]);


  // to set state of non-user profiles
  const [filteredProfiles, setFilteredProfiles] = useState([]);

  // to set array of match ids
  const [matchesIds, setMatchesIds] = useState([]);

  // to set array of match info objects
  const [matchesDetails, setMatchesDetails] = useState([])

  appData = {userProfile, filteredProfiles}


  // set state of profiles when user changes
  useEffect(() => {
    setUserProfile(getUserProfile(user));
    Axios
      .get("http://localhost:8080/api/feed/dogs")
      .then((response) => {
        setFilteredProfiles(response.data);
      });
  },[user])

  const navigation = useNavigation();
  const swipeRef = useRef(null);


// use to add to matches / passes tables

const swipeLeft = (cardIndex) => {
  if (!filteredProfiles[cardIndex]) return;   // if no cards just return

  const userSwiped = filteredProfiles[cardIndex];
  console.log(`You swiped PASS on ${userSwiped.firstName}`)
}

const swipeRight = (cardIndex) => {
  if (!filteredProfiles[cardIndex]) return;  // if no cards just return

  const userSwiped = filteredProfiles[cardIndex];
  console.log(`You swiped MATCH on ${userSwiped.firstName}`)
  const swipedId = userSwiped.id

  if ((userSwiped.matches).includes(user)) {

    //// CREATE NEW STREAM CHAT CHANNEL IF USERS MATCH ////
/*
    const swipedUserID = `${userSwiped.id}`  // needs to be a string
    const swipedUserName = `${userSwiped.dogName} & ${userSwiped.firstName} ${userSwiped.lastName}`
    const swipedUserImage = `${userSwiped.img}`

    createChannel(userID, swipedUserID, swipedUserName, swipedUserImage);
*/
    /////////////////////////////////////////////////


    usersMatchArray.push(swipedId);
    userMatchDetailsArray.push(userSwiped);
    swipedUser.push(userSwiped);

    setMatchesIds((prev) => ([...prev, swipedId]));
    setMatchesDetails((prev) => ([...prev, userSwiped]));

    console.log(`You MATCHED with ${userSwiped.firstName}!!!!`)

    navigation.navigate("Match", {userProfile, userSwiped});
  }
  else {
    console.log("Not a match")
  }
}


  return (
    <SafeAreaView style={styles.flex}> 
    
      <NavBar />
      
      <ImageBackground 
        source={require('../assets/bone-pattern.png')}
        style={styles.background2}
        imageStyle={{opacity: 0.3}}>

        <View style={styles.flex}>

          <Swiper 
            ref={swipeRef}
            containerStyle={ {backgroundColor: "transparent"} }
            cards={filteredProfiles} 
            stackSize={1}
            cardIndex={0}
            animateCardOpacity
            verticalSwipe={false}
            
            onSwipedLeft={(cardIndex) => {
              swipeLeft(cardIndex)
            }}

            onSwipedRight={(cardIndex) => {
              swipeRight(cardIndex)
            }}

            overlayLabels={{
              left: {
                title: "Pass",
                style: {
                  label: {
                   textAlign: "right",
                    color: "#f83207",
                  },
                },
              },
              right: {
                title: "Match",
                style: {
                  label: {
                    textAlign: "left",
                    color: "#65d926"
                  },
                },
              },
            }}
            renderCard={(card) => card ? (
              <View style={styles.cards} key={card.id} >
                { console.log(card) }
                  
                  <ImageBackground 
                    style={styles.cardImage}
                    imageStyle={{borderRadius:20}}
                    source={{ uri: card.dog_img }}>
                      
                      <View style={styles.spread}>
                        <TouchableOpacity onPress={() => navigation.navigate("SwipedProfile", {profile: card})} >
                          <FontAwesomeIcon icon={faCircleInfo} style={{color: "rgba(52, 52, 52, 0.9)",}} size={35} />
                        </TouchableOpacity>
                      </View>

                    <View style={styles.text}>
                      <Text style={styles.name}>{card.dog_name}</Text>
                      <Text style={styles.bio}>{/* Do not have dog bio in db */}</Text>
                    </View>

                  </ImageBackground>

                  <View style={styles.humanProfileBox} >
                    <Image source={{uri: card.profile_img}} style={styles.avatar}/>
                    <Text style={styles.humanProfile}>{`${card.first_name} ${card.last_name}`}</Text>
                    
                  </View>
    
              </View> ) : (
                <View>
                </View>
            )}
            
            />         
        </View>

        <View style={styles.buttons}>
          <TouchableOpacity 
          onPress={() => swipeRef.current.swipeLeft()}
          >
            <FontAwesomeIcon icon={faXmark} style={{color: "#f83207",}} size={50} />
          </TouchableOpacity>

          <TouchableOpacity

          onPress={() => swipeRef.current.swipeRight()}
          >
          <FontAwesomeIcon icon={faHeart} size={50} style={{color: "#65d926",}} />
          </TouchableOpacity>
        </View>
      
      </ImageBackground>
      
    </SafeAreaView>
  )
};

export default HomeScreen