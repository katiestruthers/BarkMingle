import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import appStyles from "../styles/appStyles.js";
import styles from "../styles/completionStyles.js";
import useAuth from "../hooks/useAuth.js";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import BonePatternSvg from "../svg-images/BonePatternSvg.js";
import Axios from "axios";

const CompletionScreen = () => {
  const { token, setToken } = useAuth();
  console.log('Completion Token: ', token);
  const navigation = useNavigation();

  useEffect(() => {
  }, []);

  const headers = {
    authorization: `Bearer ${token}`,
  };
  state = { selectedItems: [] };

  return (
    <View style={styles.container}>
      <BonePatternSvg style={styles.backgroundTop} />
      <TouchableOpacity onPress={() => navigation.navigate("CreateUserProfile")}>
        <FontAwesomeIcon
          icon={faArrowLeft}
          size={50}
          style={styles.backIconWhite}
        />
      </TouchableOpacity>

      <View style={styles.innerContainer}>
        <Text style={appStyles.textHeaderBlack}>
          You're all set!
        </Text>

        <TouchableOpacity onPress={() => navigation.navigate("Home")} style={appStyles.whiteButton}>
          <Text style={appStyles.textPurpleButton}> Start Matching </Text>
        </TouchableOpacity>
      </View>

      <BonePatternSvg style={styles.backgroundBottom} />
    </View>
  );
};

export default CompletionScreen;
