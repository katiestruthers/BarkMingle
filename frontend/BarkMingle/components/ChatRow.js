
import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import useAuth from '../hooks/useAuth.js';
import styles from '../styles/chatRowStyles.js';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons/faCircleInfo';

//DATA
import { usersMatchArray, filteredProfiles } from '../screens/HomeScreen.js';
import {dogProfiles, getUserProfile, matchedProfiles } from "../dummyData/dummyData.js"


const ChatRow = ( { dogName, avatar, matchDetails }) => {

  const navigation = useNavigation();
  const {user} = useAuth();
  const [matchedUserInfo, setMatchedUserInfo] = useState(null);


  // useEffect(() => {
  //   setMatchedUserInfo(matchedProfiles(usersMatchArray, filteredProfiles))
  // }, [matchDetails, user]);

  console.log(dogName)
  console.log("------")






  return (
      <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("Message", {profile: matchDetails})}> 
        <View style={styles.card}>
          <View style={styles.left}>
            <Image style={styles.avatar} source={{uri: avatar}} />
            <View style={styles.text}>
              <Text style={styles.name}> {dogName} & Human Name</Text>
              <Text> Click to say hello!</Text>
            </View>
          </View>
        </View>

        <View>
          <TouchableOpacity style={styles.info} onPress={() => navigation.navigate("SwipedProfile", {profile: matchDetails})} >
            <FontAwesomeIcon icon={faCircleInfo} style={{color: "rgba(0, 0, 0, 0.9)",}} size={30} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
  )
};

export default ChatRow