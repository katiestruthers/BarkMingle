import { useNavigation, useRoute } from '@react-navigation/core';
import React from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import styles from "../styles/matchedStyles.js";
import appStyles from "../styles/appStyles.js";
import { usersMatchArray, userMatchDetailsArray } from './HomeScreen.js';
import useAuth from '../hooks/useAuth';
import {dogProfiles, getUserProfile} from '../dummyData/dummyData.js';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons/faCircleXmark';
import { SafeAreaView } from 'react-native-safe-area-context';
import FullScreenBgSvg from '../svg-images/FullScreenBgSvg.js';


const MatchedScreen = () => {
  const { user } = useAuth();
  const navigation = useNavigation();
  const { params } = useRoute();
  const { userSwiped, filteredProfiles } = params;

  console.log(userSwiped, user);

  return (
    <SafeAreaView style={styles.background} >
      <FullScreenBgSvg style={appStyles.backgroundFull}/>

      <Image 
        source={require("../assets/confetti.gif")}
        style={styles.gif}
      />
        
        <View style={styles.spread}>
          <TouchableOpacity onPress={() => navigation.goBack()} >
            <FontAwesomeIcon icon={faCircleXmark} style={{color: "rgba(0, 0, 0, 0.9)",}} size={40} />
          </TouchableOpacity>
        </View>
      
        <View style={styles.text}>
          <Text style={styles.match}>It's a match!</Text>
          <Text style={styles.message}> {user.dog_name} and {userSwiped.dog_name} have matched </Text>
        </View>
        
        <View style={styles.avatars}>
          <Image source={{uri: user.dog_img}} style={styles.avatar}/>
          <Image source={{uri: userSwiped.dog_img}} style={styles.avatar}/>
        </View>
    

      
        <View style={styles.button}>
          <TouchableOpacity 
            onPress={() => {
              navigation.goBack();
              navigation.navigate("Matches", {userSwiped, filteredProfiles});
            }}>
            <Text style={styles.buttonText}>Send a message</Text>
          </TouchableOpacity>
        </View>
        
    </SafeAreaView>

  )
};

export default MatchedScreen

