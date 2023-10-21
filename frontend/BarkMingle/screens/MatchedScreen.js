import { useNavigation, useRoute } from '@react-navigation/core';
import React from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import styles from "../styles/matchedStyles.js"
import { qtMatches } from './HomeScreen.js';
import useAuth from '../hooks/useAuth';
import {dogProfiles, getUserProfile} from '../dummyData/dummyData.js';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons/faCircleXmark';


const MatchedScreen = () => {
  const navigation = useNavigation();
  const { params } = useRoute();
  const { userSwiped, userProfile } = params;


  // const { user } = useAuth();
  // const userProfile = getUserProfile(user);

  console.log("QT from matche", {qtMatches})

  return (
    <ImageBackground 
      source={require('../assets/purple.jpg')}
      style={[styles.background, {opacity: 0.89}]}> 
      
      <View style={styles.spread}>
        <TouchableOpacity onPress={() => navigation.goBack()} >
          <FontAwesomeIcon icon={faCircleXmark} style={{color: "rgba(240, 240, 240, 0.9)",}} size={30} />
        </TouchableOpacity>
      </View>
    
      <View style={styles.text}>
        <Text style={styles.match}>It's a match!</Text>
        <Text style={styles.message}> You and {userSwiped.firstName} have matched </Text>
        <View style={styles.avatars}>
          <Image source={userProfile.avatar} style={styles.avatar}/>
          <Image source={userSwiped.avatar} style={styles.avatar}/>
        </View>
      </View>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => {
          navigation.goBack();
          navigation.navigate("Chat");
        }}>
        <Text style={styles.buttonText}>Send a message</Text>
      </TouchableOpacity>
    </ImageBackground>

  )
};

export default MatchedScreen

