


// PROBABLY NOT USING THIS ANYMORE






import { useNavigation, useRoute } from '@react-navigation/core';
import React from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavBar from "../components/NavBar.js";
import styles from "../styles/chatStyles.js";
import Header from '../components/Header.js';
import ChatList from '../components/ChatList.js';

//DATA
import { userMatchDetailsArray, usersMatchArray, swipedUser, appData } from './HomeScreen.js';
import {dogProfiles, getUserProfile } from "../dummyData/dummyData.js"


const ChatScreen = () => {

  const {userProfile, filteredProfiles} = appData;  


  // // filter profiles to only matched profiles
  // const matchedProfiles = (matchArray) => {
  //   const matchProfiles = [];
  //   for (const m of matchesIds) {
  //     for (const p of filteredProfiles) {
  //       if (m === p.id) {
  //         matchProfiles.push(p);
  //       };
  //     };
  //   };
  //   return matchProfiles;
  // };


  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.flex}>
    
        <NavBar />
     
      <View 
        style={styles.background}>
          <ChatList  />





      </View>
    </SafeAreaView>
  )
};

export default ChatScreen