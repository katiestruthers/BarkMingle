import { useNavigation, useRoute } from "@react-navigation/core";
import React from "react";
import { View, Text, ImageBackground, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../styles/swipedProfileStyles.js"
import NavBar from "../components/NavBar.js";
import {dogProfiles, getUserProfile } from "../dummyData/dummyData.js";
import useAuth from "../hooks/useAuth.js";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons/faCircleXmark';

const SwipedProfileScreen = () => {

  const navigation = useNavigation();
  const { user } = useAuth();

  const { params } = useRoute();
  const { card } = params;

  return (
    <SafeAreaView style={styles.flex}>
      <ImageBackground 
        source={require('../assets/purple.jpg')}
        style={[styles.background, {opacity: 0.9}]}>

      <View style={styles.spread}>
        <TouchableOpacity onPress={() => navigation.goBack()} >
          <FontAwesomeIcon icon={faCircleXmark} style={{color: "rgba(240, 240, 240, 0.9)",}} size={30} />
        </TouchableOpacity>

      </View>

      <View style={styles.textBox}>
        <View>
          <Image source={card.avatar} style={styles.avatar} />
        </View>
        <View >
            <Text style={styles.nameText}>{card.firstName}</Text>
          </View>
          <View>
            <Text style={styles.bio}> {card.bio}</Text>
          </View>
      </View>

       

          

      </ImageBackground>
    </SafeAreaView>
  )
};

export default SwipedProfileScreen
