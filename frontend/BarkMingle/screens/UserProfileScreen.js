import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, Text, ImageBackground, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../styles/userProfileStyles.js"
import NavBar from "../components/NavBar.js";
import dogProfiles from "../dummyData/dummyData.js";
import useAuth from "../hooks/useAuth.js";

const UserProfileScreen = () => {

  const { user } = useAuth();

  let userProfile = {}
  for (const p of dogProfiles) {
    if (p.id === user) {
      userProfile = p;
    };
  };
  
  return (
    <SafeAreaView style={styles.flex}>
      <View style={styles.navBar}>
        <NavBar />
      </View>
      <ImageBackground 
        source={require('../assets/pale.jpg')}
        style={styles.background}>
          <View style={styles.textBox}>
            <Text style={styles.nameText}>{userProfile.firstName}</Text>
          </View>
          <View>
            <Image source={userProfile.avatar} style={styles.avatar} />
          </View>
          <View>
            <Text> {userProfile.bio}</Text>
          </View>
          

          

      </ImageBackground>
    </SafeAreaView>
  )
};

export default UserProfileScreen