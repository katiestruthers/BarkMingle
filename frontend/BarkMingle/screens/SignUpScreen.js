import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
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
  const { user } = useAuth();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const onSubmit = () => {
    Axios.post("http://localhost:8080/api/users/signup", {
      email,
      password,
      passwordConfirmation: password
    }).then(res => {
      console.log(res.data.message);
      navigation.navigate("CreateDogProfile");
    }).catch(err => console.log(err));
  }

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
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
    </View>
  );
};

export default SignIn;
