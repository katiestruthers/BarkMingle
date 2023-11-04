import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image
} from "react-native";
import appStyles from "../styles/appStyles.js";
import styles from "../styles/completionStyles.js";
import useAuth from "../hooks/useAuth.js";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import FullScreenBgSvg from "../svg-images/FullScreenBgSvg.js";
import Axios from "axios";

const CompletionScreen = () => {
  const { token, setToken, user } = useAuth();
  const navigation = useNavigation();
  console.log('Created user info:', user);

  const headers = {
    authorization: `Bearer ${token}`,
  };
  state = { selectedItems: [] };

  return (
    <View style={appStyles.containerPurple}>
      <FullScreenBgSvg style={appStyles.backgroundFull} />
      <TouchableOpacity onPress={() => navigation.navigate("CreateUserProfile")}>
        <FontAwesomeIcon
          icon={faArrowLeft}
          size={50}
          style={appStyles.backIconWhite}
        />
      </TouchableOpacity>

      <View style={appStyles.contentContainer}>
        <Text style={styles.headerBlack}>
          You're all set!
        </Text>

        <Image 
          source={require('../assets/three-dogs.gif')}
          style={styles.gif}
        />

        <TouchableOpacity onPress={() => navigation.navigate("Home")} style={appStyles.whiteButton}>
          <Text style={appStyles.textPurpleButton}> Start Matching </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CompletionScreen;
