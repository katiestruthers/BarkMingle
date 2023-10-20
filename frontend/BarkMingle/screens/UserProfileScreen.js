import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../styles/userProfileStyles.js"
import NavBar from "../components/NavBar.js";

const UserProfileScreen = () => {

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.flex}>
      <View style={styles.navBar}>
        <NavBar />
      </View>
      <ImageBackground 
        source={require('../assets/pale.jpg')}
        style={styles.background}>

          <Text>USER PROFILE SCREEN</Text>

      </ImageBackground>
    </SafeAreaView>
  )
};

export default UserProfileScreen