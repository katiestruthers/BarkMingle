import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, Text, ImageBackground, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../styles/userProfileStyles.js"
import NavBar from "../components/NavBar.js";
import {dogProfiles, getUserProfile } from "../dummyData/dummyData.js";
import useAuth from "../hooks/useAuth.js";

const UserProfileScreen = () => {

  const navigation = useNavigation();
  const { user } = useAuth();

  const userProfile = getUserProfile(user)
 
  return (
    <SafeAreaView style={styles.flex}>
      
        <NavBar />

      <ImageBackground 
        source={require("../assets/bone-pattern.png")}
        style={styles.background}
        imageStyle={{opacity: 0.3}}>

          <View style={styles.textBox}> 
            <Text style={styles.nameText}>
              {userProfile.firstName}
            </Text>

            <View>
              <Image 
                source={{uri: userProfile.avatar}}
                style={styles.avatar} />
            </View>

            <View>
              <Text> {userProfile.bio}</Text>
            </View>

            <View style={styles.buttonGroup}>
              <TouchableOpacity style={styles.button} >
                <Text style={styles.buttonText}> Edit Profile </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button} >
                <Text style={styles.buttonText}> Sign Out </Text>
              </TouchableOpacity>

            </View>


          </View>

      </ImageBackground>

    </SafeAreaView>
  )
};

export default UserProfileScreen