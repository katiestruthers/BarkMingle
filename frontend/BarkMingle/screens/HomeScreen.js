import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, Text, Button, ImageBackground, SafeAreaView } from "react-native";
import styles from "../styles/loginStyles.js"
import useAuth from "../hooks/useAuth.js";
import Footer from "../components/Footer.js";

// home screen component

const HomeScreen = () => {

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
            <Footer />
          </View>

      </ImageBackground>
    </SafeAreaView>
  )
}

export default HomeScreen