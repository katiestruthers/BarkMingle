import { useNavigation, useRoute } from '@react-navigation/core';
import React from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import styles from "../styles/matchedStyles.js"
import { usersMatchArray } from './HomeScreen.js';
import useAuth from '../hooks/useAuth';
import {dogProfiles, getUserProfile} from '../dummyData/dummyData.js';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons/faCircleXmark';
import { SafeAreaView } from 'react-native-safe-area-context';


const MatchedScreen = () => {
  const navigation = useNavigation();
  const { params } = useRoute();
  const { userSwiped, userProfile, filterProfiles } = params;


  // const { user } = useAuth();
  // const userProfile = getUserProfile(user);

  console.log("QT from matches", {usersMatchArray})

  return (
    <SafeAreaView style={styles.background} >
      <ImageBackground 
        source={require('../assets/bone-pattern.png')}
        style={styles.background} 
        imageStyle={{opacity: 0.3}}> 
        
        <View style={styles.spread}>
          <TouchableOpacity onPress={() => navigation.goBack()} >
            <FontAwesomeIcon icon={faCircleXmark} style={{color: "rgba(0, 0, 0, 0.9)",}} size={30} />
          </TouchableOpacity>
        </View>
      
        <View style={styles.text}>
          <Text style={styles.match}>It's a match!</Text>
          <Text style={styles.message}> You and {userSwiped.firstName} have matched </Text>
        </View>
        
        <View style={styles.avatars}>
          <Image source={{uri: userProfile.avatar}} style={styles.avatar}/>
          <Image source={{uri: userSwiped.avatar}} style={styles.avatar}/>
        </View>
    

      
        <View style={styles.button}>
          <TouchableOpacity 
            onPress={() => {
              navigation.goBack();
              navigation.navigate("Chat", {userProfile, userSwiped, filterProfiles, usersMatchArray});
            }}>
            <Text style={styles.buttonText}>Send a message</Text>
          </TouchableOpacity>
        </View>
        
      </ImageBackground>
    </SafeAreaView>

  )
};

export default MatchedScreen

