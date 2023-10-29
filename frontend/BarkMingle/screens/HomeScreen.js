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
import useAuth from '../hooks/useAuth.js';
import NavBar from '../components/NavBar.js';
import Axios from "axios";
import { AuthProvider } from "../hooks/useAuth.js";

export const usersMatchArray = [];
export const userMatchDetailsArray = [];
export const swipedUser = [];

export let appData = {};

const HomeScreen = () => {

  // Get user and JWT token from useAuth
  const { user, token } = useAuth();
  const headers = {
    authorization: `Bearer ${token}`  
  };
  
  // to set state of non-user profiles
  const [filteredProfiles, setFilteredProfiles] = useState([]);

  appData = {user, filteredProfiles};

  // set state of profiles when user changes
  useEffect(() => {
    Axios
      .get("http://localhost:8080/api/feed/dogs", { headers })
      .then((response) => {
        setFilteredProfiles(response.data);
      })
      .catch(err => console.log(err));
  },[user]);

  const navigation = useNavigation();
  const swipeRef = useRef(null);


// Helper functions to add to swipes & matches table //

const swipeLeft = (cardIndex) => {
  const userSwiped = filteredProfiles[cardIndex];

  if (!userSwiped) return;   // if no cards, just return

  const userSwipedId = userSwiped.user_id;
  console.log(`You swiped PASS on ${userSwiped.dog_name}, user id ${userSwipedId}`);

  // Add pass to swipes table
  Axios
  .post(`http://localhost:8080/api/feed/dogs/${userSwipedId}`, {
    swiped_by_user_id: user.id,
    swiped_user_id: userSwipedId,
    is_liked: false
    }, { headers });
};

const swipeRight = (cardIndex) => {
  const userSwiped = filteredProfiles[cardIndex];

  if (!userSwiped) return;  // if no cards, just return

  const userSwipedId = userSwiped.user_id;
  console.log(`You swiped LIKE on ${userSwiped.dog_name}, user id ${userSwipedId}`);

  // Get all likes received for current user
  // If received a like for userSwipedId, redirect to matches page
  Axios.get("http://localhost:8080/api/feed/likes", { headers })
    .then((res) => {
      const likesReceived = res.data;
      console.log("You've received the following likes:", likesReceived);
      if (likesReceived.includes(Number(userSwipedId))) {
        console.log(`You MATCHED with ${userSwiped.dog_name}, user id ${userSwipedId}!!!`);
        navigation.navigate("Match", { userSwiped });
      } else {
        console.log(`No match with ${userSwiped.dog_name}.`);
      }
    })
    .catch(error => console.log(error));

  // Add like to swipes table
  // Will create a new instance on the matches table if mutual like
  Axios.post(`http://localhost:8080/api/feed/dogs/${userSwipedId}`, {
    swiped_by_user_id: user.id,
    swiped_user_id: userSwipedId,
    is_liked: true
    }, { headers });
  };


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