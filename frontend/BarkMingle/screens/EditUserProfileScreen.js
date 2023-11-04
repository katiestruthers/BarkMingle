import { useNavigation } from '@react-navigation/core';
import React, { useState, useEffect } from 'react';
import { View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity, Platform, Image } from 'react-native';
import appStyles from '../styles/appStyles.js';
import styles from '../styles/createUserProfileStyles.js';
import useAuth from '../hooks/useAuth.js';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft, faImage, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import BonePatternSvg from "../svg-images/BonePatternSvg.js";
import StatusBarSvg4 from '../svg-images/StatusBarSvg4.js';
import Axios from 'axios';
import useFileUpload from '../hooks/useFileUpload.js';
import Uploading from '../components/Uploading.js';


const EditUserProfileScreen = () => {
  const { token, setToken, user, setUser } = useAuth();

  const navigation = useNavigation();

  const headers = {
    authorization: `Bearer ${token}`,
  };

  const [first_name, setFirstName] = useState(user.first_name);
  const [last_name, setLastName] = useState(user.last_name);
  const [bio, setBio] = useState(user.bio);
  const profileImg = user.profile_img
  
  const onSubmit = () => {
    Axios.post("http://localhost:8080/api/users", {
      first_name,
      last_name,
      bio,
      profile_img: profileImg,
    }, { headers }).then(res => {
      setUser(res.data.user);
      navigation.navigate("UserProfile"); // Navigato to the "UserProfile" screen on success
    }).catch(err => console.log(err));
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS == "ios" ? "padding" : "height"} 
    >
    <BonePatternSvg style={styles.backgroundTop} />
    <TouchableOpacity onPress={() => navigation.navigate("UserProfile")}>
      <FontAwesomeIcon
        icon={faArrowLeft}
        size={50}
        style={appStyles.backIconPurple}
      />
    </TouchableOpacity>
    <View>
      <Text style={appStyles.textHeaderPurple}>
        Edit your profile details
      </Text>
    </View>

    <View style={styles.textContainer}>
      <Text style={styles.textHeaderBlack}>First Name *</Text>
      <View style={styles.inputView}>
        <TextInput
          style={appStyles.textInput}
          onChangeText={(text)=>setFirstName(text)}
          value={first_name}
        />
      </View>

      <Text style={styles.textHeaderBlack}>Last Name * </Text>
      <View style={styles.inputView}>
        <TextInput
          style={appStyles.textInput}
          onChangeText={(text)=>setLastName(text)}
          value={last_name}
        />
      </View>

      <Text style={styles.textHeaderBlack}>Write a short bio</Text>
      <View style={styles.inputViewBio}>
        <TextInput
          style={appStyles.textInput}
          onChangeText={(text)=>setBio(text)}
          value={bio}
          multiline={true}
        />
      </View>

    </View>

    <TouchableOpacity
      onPress={onSubmit}
      style={appStyles.purpleButton}
    >
    <Text style={appStyles.textWhite}> Save Changes </Text>
    </TouchableOpacity>
    <BonePatternSvg style={styles.backgroundBottom} />
  </KeyboardAvoidingView>
);
};

export default EditUserProfileScreen