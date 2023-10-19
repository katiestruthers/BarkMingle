import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, Text, Button, ImageBackground, SafeAreaView } from "react-native";
import styles from "../styles/userProfileStyles.js"
import useAuth from "../hooks/useAuth.js";
import NavBar from "../components/NavBar.js";


// User Profile screen component

const UserProfile = () => {

  const navigation = useNavigation();
  const { user } = useAuth();

  return (
    <SafeAreaView style={styles.flex}>
      <View style={styles.navBar}>
        <NavBar />
      </View>
      <ImageBackground 
        source={require('../assets/dogbones.jpg')}
        style={styles.background}>


          <Text>USER PROFILE SCREEN</Text>

      </ImageBackground>
    </SafeAreaView>
  )
}

export default UserProfile