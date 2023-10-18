import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, Text, Button, ImageBackground, SafeAreaView } from "react-native";
import styles from "../styles/loginStyles.js"
import useAuth from "../hooks/useAuth.js";


// User Profile screen component

const UserProfile = () => {

  const navigation = useNavigation();
  const { user } = useAuth();

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground 
        source={require('../assets/dogbones.jpg')}
        style={styles.background}>


          <Text>HOME SCREEN</Text>
          

          <View>
          <Button title="Start Chatting" onPress={() => navigation.navigate("Chat")}/>
          </View>

      </ImageBackground>
    </SafeAreaView>
  )
}

export default UserProfile