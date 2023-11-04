import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Platform,
  Image,
} from "react-native";
import appStyles from "../styles/appStyles.js";
import styles from "../styles/createUserProfileStyles.js";
import useAuth from "../hooks/useAuth.js";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import FullScreenBgSvg from "../svg-images/FullScreenBgSvg.js";
import StatusBarSvg4 from "../svg-images/StatusBarSvg4.js";
import Axios from "axios";
import useFileUpload from "../hooks/useFileUpload.js";
import Uploading from "../components/Uploading.js";

const CreateUserProfileScreen = () => {
  const { token, setToken, setUser } = useAuth();

  const navigation = useNavigation();

  const headers = {
    authorization: `Bearer ${token}`,
  };

  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [bio, setBio] = useState("");

  const { pickImage, image, progress, userImage } = useFileUpload();

  const onSubmit = () => {
    Axios.post(
      "http://localhost:8080/api/users",
      {
        first_name,
        last_name,
        bio,
        profile_img: userImage,
      },
      { headers }
    )
      .then((res) => {
        setUser(res.data.user);
        navigation.navigate("Completion"); // Navigato to the "Home" screen on success
      })
      .catch((err) => console.log(err));
  };

  // console.log("url", userImage)

  return (
    <KeyboardAvoidingView
      style={appStyles.containerWhite}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <FullScreenBgSvg style={appStyles.backgroundFull} />
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

      <View style={appStyles.contentContainer}>
        <View style={styles.imageContainer}>
          {userImage && (
            <Image source={{ uri: userImage }} style={styles.image} />
          )}
        </View>

        <View style={styles.uploadContainer}>
          {image ? (
            <Uploading progress={progress} style={styles.uploading} />
          ) : (
            <TouchableOpacity onPress={pickImage}>
              <Text style={styles.textPurple}>Upload a profile photo</Text>
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.textContainer}>
          <Text style={appStyles.textSmallHeaderBlack}>First Name *</Text>
          <View style={appStyles.inputView}>
            <TextInput
              style={appStyles.textInput}
              onChangeText={(text) => setFirstName(text)}
            />
          </View>

          <Text style={appStyles.textSmallHeaderBlack}>Last Name * </Text>
          <View style={appStyles.inputView}>
            <TextInput
              style={appStyles.textInput}
              onChangeText={(text) => setLastName(text)}
            />
          </View>

          <Text style={appStyles.textSmallHeaderBlack}>Write a short bio</Text>
          <View style={styles.inputViewBio}>
            <TextInput
              style={styles.textInputBio}
              onChangeText={(text) => setBio(text)}
              multiline={true}
              numberOfLines={3}
              maxHeight={90}
            />
          </View>
        </View>
      </View>

      <TouchableOpacity onPress={onSubmit}>
        <FontAwesomeIcon
          icon={faArrowRight}
          size={50}
          style={appStyles.forwardIconPurple}
        />
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default CreateUserProfileScreen;
