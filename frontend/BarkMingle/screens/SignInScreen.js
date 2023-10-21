import { useNavigation } from "@react-navigation/core";
import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";
import useAuth from "../hooks/useAuth.js";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import appStyles from "../styles/appStyles.js";

const SignIn = () => {
  const { user } = useAuth();

  const navigation = useNavigation();

  return (
    <View style={appStyles.container}>
      <ImageBackground
        source={require("../assets/purple.jpg")}
        style={appStyles.background}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("GetStarted")}
        >
        <FontAwesomeIcon icon={faArrowLeft} size={50} style={appStyles.backIcon}/>
        </TouchableOpacity>
        <View style={appStyles.inputView}>
          <TextInput
            style={appStyles.textInput}
            placeholder="Email"
            placeholderTextColor="#003f5c"
          />
        </View>

        <View style={appStyles.inputView}>
          <TextInput
            style={appStyles.textInput}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
          />
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("")}
          style={appStyles.blackButton} 
        >
          <Text style={appStyles.textWhite}> Sign In </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default SignIn;
