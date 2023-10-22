import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View, Text, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import appStyles from '../styles/appStyles.js';
import useAuth from '../hooks/useAuth.js';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";

const CreateUserProfileScreen = () => {
  const { user } = useAuth();

  const navigation = useNavigation();

  return (
    <View style={appStyles.container}>
      <ImageBackground
        source={require("../assets/purple.jpg")}
        style={appStyles.background}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Traits")}>
          <FontAwesomeIcon
            icon={faArrowLeft}
            size={50}
            style={appStyles.backIcon}
          />
        </TouchableOpacity>
        
        <Text style={appStyles.textWhite}>Now let's make a profile for you</Text>

        <TouchableOpacity onPress={() => navigation.navigate(" ")}>
          <FontAwesomeIcon
            icon={faArrowRight}
            size={50}
            style={appStyles.forwardIcon}
          />
        </TouchableOpacity>

      </ImageBackground>
    </View>
  );
};

export default CreateUserProfileScreen