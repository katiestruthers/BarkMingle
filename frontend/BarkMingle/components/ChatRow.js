
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


const ChatRow = ( { dogName, avatar, humanName, matchDetails }) => {

  const navigation = useNavigation();
  const {user} = useAuth();


  return (
      <View style={styles.container}>   
        <TouchableOpacity >
          <View style={styles.card}>
            <View>
              <Image style={styles.avatar} source={{uri: avatar}} />
            </View>
            
            <View style={styles.text}>
              <Text >{dogName} & {humanName}</Text>
              <Text> Click to say hello!</Text>
            </View>

            <View>
              <TouchableOpacity style={styles.info} onPress={() => navigation.navigate("SwipedProfile", {profile: matchDetails})} >
                <FontAwesomeIcon icon={faCircleInfo} style={{color: "rgba(0, 0, 0, 0.6)",}} size={30} />
              </TouchableOpacity>
            </View>
            
          </View>
        </TouchableOpacity>

      </View>
  )
};

export default ChatRow