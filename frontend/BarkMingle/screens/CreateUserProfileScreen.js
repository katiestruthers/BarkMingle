import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity, Platform } from 'react-native';
import appStyles from '../styles/appStyles.js';
import styles from '../styles/createUserProfileStyles.js';
import useAuth from '../hooks/useAuth.js';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import BonePatternSvg from "../svg-images/BonePatternSvg.js";
import StatusBarSvg4 from '../svg-images/StatusBarSvg4.js';

const CreateUserProfileScreen = () => {
  const { user } = useAuth();

  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS == "ios" ? "padding" : "height"} 
    >
    <BonePatternSvg style={styles.backgroundTop} />
    <StatusBarSvg4 style={appStyles.statusBar} />
    <TouchableOpacity onPress={() => navigation.navigate("Upload")}>
      <FontAwesomeIcon
        icon={faArrowLeft}
        size={50}
        style={appStyles.backIconPurple}
      />
    </TouchableOpacity>
    <View>
      <Text style={appStyles.textHeaderPurple}>
        Now let's make a profile for you
      </Text>
    </View>

    <View style={styles.textContainer}>
      <Text style={styles.textHeaderBlack}>First Name *</Text>
      <View style={styles.inputView}>
        <TextInput
          style={appStyles.textInput}
        />
      </View>

      <Text style={styles.textHeaderBlack}>Last Name * </Text>
      <View style={styles.inputView}>
        <TextInput
          style={appStyles.textInput}
        />
      </View>

      

      <Text style={styles.textHeaderBlack}>Write a short bio</Text>
      <View style={styles.inputViewBio}>
        <TextInput
          style={appStyles.textInput}
          multiline={true}
        />
      </View>

    </View>

    <TouchableOpacity>
      <FontAwesomeIcon
        icon={faArrowRight}
        size={50}
        style={appStyles.forwardIconPurple}
      />
    </TouchableOpacity>
    <BonePatternSvg style={styles.backgroundBottom} />
  </KeyboardAvoidingView>
);
};

export default CreateUserProfileScreen