import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View, Text, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import appStyles from '../styles/appStyles.js';
import useAuth from '../hooks/useAuth.js';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";

const TraitsScreen = () => {
  const { user } = useAuth();

  const navigation = useNavigation();

  return (
    <View style={appStyles.container}>
      <ImageBackground
        source={require("../assets/purple.jpg")}
        style={appStyles.background}
      >
        <TouchableOpacity onPress={() => navigation.navigate("CreateDogProfile")}>
          <FontAwesomeIcon
            icon={faArrowLeft}
            size={50}
            style={appStyles.backIcon}
          />
        </TouchableOpacity>
        
        <Text style={appStyles.textWhite}>Please select 3 traits that best describe your pup</Text>

        <TouchableOpacity onPress={() => navigation.navigate("Upload")}>
          <FontAwesomeIcon
            icon={faArrowRight}
            size={50}
            style={appStyles.backIcon}
          />
        </TouchableOpacity>

      </ImageBackground>
    </View>
  );
};

export default TraitsScreen