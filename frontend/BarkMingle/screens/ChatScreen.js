import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavBar from "../components/NavBar.js";
import styles from "../styles/chatStyles.js"
import { qtMatches } from './HomeScreen.js';

const ChatScreen = () => {

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.flex}>
      <View style={styles.navBar}>
        <NavBar />
      </View>
      <ImageBackground 
        source={require('../assets/pale.jpg')}
        style={styles.background}>


          <Text>CHAT SCREEN</Text>
          {console.log("QT", qtMatches)}

      </ImageBackground>
    </SafeAreaView>
  )
};

export default ChatScreen