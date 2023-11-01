import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import useAuth from "../hooks/useAuth.js";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import appStyles from "../styles/appStyles.js";
import styles from "../styles/signUpStyles.js";
import SignUpSvgBlob from "../svg-images/SignUpSvgBlob.js";
import SignUpSvgComponent from "../svg-images/SignUpSvgComponent.js";
import WhiteBGPatternSvgComponent from "../svg-images/WhiteBGPatternSvgComponent.js";
import Axios from "axios";

const SignIn = () => {
  const { token, setToken, setUser } = useAuth();
  const navigation = useNavigation();
  const headers = {
    authorization: `Bearer ${token}`,   // Make sure you add this!!! 
  };

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const onSubmit = () => {
    Axios.post("http://localhost:8080/api/users/signup", {
      email,
      password,
      passwordConfirmation: password
    }, { headers }).then(res => {
      setToken(res.data.token);
      setUser(res.data.user);
      console.log('Created user info:', res.data.user);
      navigation.navigate("CreateDogProfile");
    }).catch(err => console.log(err));
  };
  
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS == "ios" ? "padding" : "height"} 
    >
      <View style={styles.upperContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("GetStarted")}>
          <FontAwesomeIcon
            icon={faArrowLeft}
            size={50}
            style={appStyles.backIconWhite}
          />
        </TouchableOpacity>
        <Text style={styles.textHeadingWhite}> Sign Up </Text>
        <SignUpSvgComponent style={styles.image} />
        <SignUpSvgBlob style={styles.blob} />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.textHeaderBlack}>Email</Text>
        <View style={appStyles.inputView}>
          <TextInput
            style={appStyles.textInput}
            onChangeText={(text)=>setEmail(text)}
          />
        </View>

        <Text style={styles.textHeaderBlack}>Password</Text>
        <View style={appStyles.inputView}>
          <TextInput
            style={appStyles.textInput}
            onChangeText={(text)=>setPassword(text)}
            secureTextEntry={true}
          />
        </View>

        <TouchableOpacity
          onPress={onSubmit}
          style={appStyles.blackButton}
        >
          <Text style={appStyles.textWhite}> Sign Up </Text>
        </TouchableOpacity>
        <WhiteBGPatternSvgComponent style={styles.background} />
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignIn;
