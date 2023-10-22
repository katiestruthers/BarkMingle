import { useNavigation } from "@react-navigation/core";
import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";
import appStyles from "../styles/appStyles.js";
import useAuth from "../hooks/useAuth.js";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";

const CreateDogProfileScreen = () => {
  const { user } = useAuth();

  const navigation = useNavigation();

  return (
    <View style={appStyles.container}>
      <ImageBackground
        source={require("../assets/purple.jpg")}
        style={appStyles.background}
      >
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <FontAwesomeIcon
            icon={faArrowLeft}
            size={50}
            style={appStyles.backIcon}
          />
        </TouchableOpacity>
        <View style={appStyles.inputView}>
          <TextInput
            style={appStyles.textInput}
            placeholder="Dog Name"
            placeholderTextColor="#003f5c"
          />
        </View>

        <View style={appStyles.inputView}>
          <TextInput
            style={appStyles.textInput}
            placeholder="Breed"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
          />
        </View>

        <View style={appStyles.inputView}>
          <TextInput
            style={appStyles.textInput}
            placeholder="Gender"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
          />
        </View>

        <View style={appStyles.inputView}>
          <TextInput
            style={appStyles.textInput}
            placeholder="Age"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
          />
        </View>

        <View style={appStyles.inputView}>
          <TextInput
            style={appStyles.textInput}
            placeholder="Size"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
          />
        </View>

        <View style={appStyles.inputView}>
          <TextInput
            style={appStyles.textInput}
            placeholder="Fixed Status"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
          />
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("Traits")}>
          <FontAwesomeIcon
            icon={faArrowRight}
            size={50}
            style={appStyles.forwardIcon}
          />
        </TouchableOpacity>

      </ImageBackground>
    </View>
  );
};

export default CreateDogProfileScreen;
