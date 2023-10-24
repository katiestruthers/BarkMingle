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
import {dogProfiles, getUserProfile, filterProfiles } from "../dummyData/dummyData.js"
import useAuth from '../hooks/useAuth.js';
import NavBar from '../components/NavBar.js';


export const usersMatchArray = [];
export let filteredProfiles;


const HomeScreen = () => {

  const { user } = useAuth();


  // TEMP DATA MANIPULATION:

  const userProfile = getUserProfile(user);

  // filter profiles based on user id
  filteredProfiles = filterProfiles(user);
 
  const navigation = useNavigation();
  const swipeRef = useRef(null);

// use to add to matches / passes tables
const swipeLeft = (cardIndex) => {
  if (!filteredProfiles[cardIndex]) return;

  const userSwiped = filteredProfiles[cardIndex];
  console.log(`You swiped PASS on ${userSwiped.firstName}`)
}

const swipeRight = (cardIndex) => {
  if (!filteredProfiles[cardIndex]) return;

  const userSwiped = filteredProfiles[cardIndex];
  console.log(`You swiped MATCH on ${userSwiped.firstName}`)
  const swipedId = userSwiped.id

  if ((userSwiped.matches).includes(user)) {
    usersMatchArray.push(swipedId)
    console.log(`You MATCHED with ${userSwiped.firstName}!!!!`)
    navigation.navigate("Match", {userProfile, userSwiped});
  }
  else {
    console.log("Not a match")
  }
}


////////////////////////////////////////////////////////

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
                    source={{ uri: card.avatar }}>
                      
                      <View style={styles.spread}>
                        <TouchableOpacity onPress={() => navigation.navigate("SwipedProfile", {profile: card})} >
                          <FontAwesomeIcon icon={faCircleInfo} style={{color: "rgba(52, 52, 52, 0.9)",}} size={35} />
                        </TouchableOpacity>
                      </View>

                    <View style={styles.text}>
                      <Text style={styles.name}>{card.firstName}</Text>
                      <Text style={styles.bio}>{card.bio}</Text>
                    </View>

                  </ImageBackground>

                  <View style={styles.humanProfileBox} >
                    <Image source={{uri: card.human}} style={styles.avatar}/>
                    <Text style={styles.humanProfile}>Human Profile</Text>
                    
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