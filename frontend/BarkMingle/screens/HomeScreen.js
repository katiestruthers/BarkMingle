import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { ImageBackground, TouchableOpacity, View } from 'react-native'; // can also use SafeAreaView from reg react-native if it looks better?
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from "../styles/homeStyles.js" 
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { faDog } from '@fortawesome/free-solid-svg-icons/faDog';
import { faPaw } from '@fortawesome/free-solid-svg-icons/faPaw';

const HomeScreen = () => {

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.flex}> 
      
      <View style={styles.navBar}>
        <TouchableOpacity  onPress={() => navigation.navigate("Chat")}>
          <FontAwesomeIcon icon={ faPaw } size={50} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <FontAwesomeIcon icon={ faDog } size={50}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("UserProfile")}>
          <FontAwesomeIcon icon={ faUser } size={50}/>
        </TouchableOpacity>
      </View>

      <ImageBackground 
        source={require('../assets/dogbones.jpg')}
        style={styles.background2}>
      
      </ImageBackground>
      
    </SafeAreaView>
  )
};

export default HomeScreen