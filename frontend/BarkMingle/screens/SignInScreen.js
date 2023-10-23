import { useNavigation } from "@react-navigation/core";
import React from "react";
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

const SignIn = () => {
  const { user } = useAuth();

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("GetStarted")}>
          <FontAwesomeIcon
            icon={faArrowLeft}
            size={50}
            style={appStyles.backIcon}
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
          />
        </View>

        <Text style={styles.textHeaderBlack}>Password</Text>
        <View style={appStyles.inputView}>
          <TextInput
            style={appStyles.textInput}
            secureTextEntry={true}
          />
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("")}
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
