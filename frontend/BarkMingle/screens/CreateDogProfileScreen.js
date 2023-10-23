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
import styles from "../styles/createDogProfileStyles.js";
import useAuth from "../hooks/useAuth.js";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import BonePatternSvg from "../svg-images/BonePatternSvg.js";
import StatusBarSvg1 from "../svg-images/StatusBarSvg1.js";

const CreateDogProfileScreen = () => {
  const { user } = useAuth();

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <BonePatternSvg style={styles.backgroundTop} />
      <StatusBarSvg1 style={appStyles.statusBar} />
      <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
        <FontAwesomeIcon
          icon={faArrowLeft}
          size={50}
          style={appStyles.backIconPurple}
        />
      </TouchableOpacity>
      <View>
        <Text style={appStyles.textHeaderPurple}>
          Let's get a profile started for your dog
        </Text>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.textHeaderBlack}>Dog Name *</Text>
        <View style={styles.inputView}>
          <TextInput
            style={appStyles.textInput}
          />
        </View>

        <Text style={styles.textHeaderBlack}>Breed * </Text>
        <View style={styles.inputView}>
          <TextInput
            style={appStyles.textInput}
            secureTextEntry={true}
          />
        </View>

        <Text style={styles.textHeaderBlack}>Gender * </Text>
        <View style={styles.inputView}>
          <TextInput
            style={appStyles.textInput}
            secureTextEntry={true}
          />
        </View>

        <Text style={styles.textHeaderBlack}>Age * </Text>
        <View style={styles.inputView}>
          <TextInput
            style={appStyles.textInput}
            secureTextEntry={true}
          />
        </View>

        <Text style={styles.textHeaderBlack}>Size * </Text>
        <View style={styles.inputView}>
          <TextInput
            style={appStyles.textInput}
            secureTextEntry={true}
          />
        </View>

        <Text style={styles.textHeaderBlack}>Spayed / Neutered? * </Text>
        <View style={appStyles.buttonContainer}>
          <TouchableOpacity style={appStyles.button}>
            <Text style={appStyles.textBlackButton}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={appStyles.button}>
            <Text style={appStyles.textBlackButton}>No</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("Traits")}>
        <FontAwesomeIcon
          icon={faArrowRight}
          size={50}
          style={appStyles.forwardIconPurple}
        />
      </TouchableOpacity>
      <BonePatternSvg style={styles.backgroundBottom} />
    </View>
  );
};

export default CreateDogProfileScreen;
