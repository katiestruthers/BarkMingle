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
import SignInSvgComponent from "../svg-images/SignInSvgComponent.js";
import styles from "../styles/signInStyles.js";
import SignInSvgBlob from "../svg-images/SignInSvgBlob.js";
import WhiteBGPatternSvgComponent from "../svg-images/WhiteBGPatternSvgComponent.js";
import Axios from 'axios';

const SignIn = () => {
  const { token, setToken } = useAuth();
  const navigation = useNavigation();

  const headers = {
    authorization: `Bearer ${token}`,
  };

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const onSubmit = () => {
    Axios.post("http://localhost:8080/api/users/signin", {
      email,
      password,
      passwordConfirmation: password
    }, { headers }).then(res => {
      setToken(res.data.token);
      console.log(res.data.message);
      navigation.navigate("CreateDogProfile"); // // Navigato to the "Traits" screen on success
    }).catch(err => console.log(err));
  };

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
        <Text style={styles.textHeadingWhite}> Sign In </Text>
        <SignInSvgComponent style={styles.image} />
        <SignInSvgBlob style={styles.blob} />
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
          <Text style={appStyles.textWhite}> Sign In </Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.textPurple}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={appStyles.textSignIn}> Sign Up</Text>
          </TouchableOpacity>
        </View>
        <WhiteBGPatternSvgComponent style={styles.background} />
      </View>
    </View>
  );
};

export default SignIn;
