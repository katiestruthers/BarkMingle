import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
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


const CreateUserProfileScreen = () => {
  const { token, setToken } = useAuth();
  console.log("CreateUserProfileToken: ", token);

  const navigation = useNavigation();

  const headers = {
    authorization: `Bearer ${token}`,
  };

  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [bio, setBio] = useState("");

  const { pickImage, image, progress, userImage } = useFileUpload();

  const onSubmit = () => {
    Axios.post("http://localhost:8080/api/users", {
      first_name,
      last_name,
      bio,
      profile_img: userImage,
    }, { headers }).then(res => {
      navigation.navigate("Home"); // Navigato to the "Home" screen on success
    }).catch(err => console.log(err));
  };

  console.log("url", userImage)

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

        <View style={styles.imageContainer}>
          {userImage && (
            <Image
              source={{ uri: userImage }}
              style={styles.image}
            />
          )}
        </View>

        <View>
          {image ? (
            <Uploading image={image} progress={progress} />
          ) : (
            <TouchableOpacity
              onPress={pickImage}
            >
            <Text style={styles.textPurple}>Upload a profile photo</Text>
            </TouchableOpacity>
          )}
        </View>


    <View style={styles.textContainer}>
      <Text style={styles.textHeaderBlack}>First Name *</Text>
      <View style={styles.inputView}>
        <TextInput
          style={appStyles.textInput}
          onChangeText={(text)=>setFirstName(text)}
        />
      </View>

      <Text style={styles.textHeaderBlack}>Last Name * </Text>
      <View style={styles.inputView}>
        <TextInput
          style={appStyles.textInput}
          onChangeText={(text)=>setLastName(text)}
        />
      </View>

      

      <Text style={styles.textHeaderBlack}>Write a short bio</Text>
      <View style={styles.inputViewBio}>
        <TextInput
          style={appStyles.textInput}
          onChangeText={(text)=>setBio(text)}
          multiline={true}
        />
      </View>

    </View>

    <TouchableOpacity onPress={onSubmit}>
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