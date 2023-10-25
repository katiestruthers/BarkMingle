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
import styles from "../styles/traitsStyles.js";
import useAuth from "../hooks/useAuth.js";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import BonePatternSvg from "../svg-images/BonePatternSvg.js";
import StatusBarSvg2 from "../svg-images/StatusBarSvg2.js";

const TraitsScreen = () => {
  const { user } = useAuth();

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <BonePatternSvg style={styles.backgroundTop} />
      <StatusBarSvg2 style={appStyles.statusBar} />
      <TouchableOpacity onPress={() => navigation.navigate("CreateDogProfile")}>
        <FontAwesomeIcon
          icon={faArrowLeft}
          size={50}
          style={styles.backIconWhite}
        />
      </TouchableOpacity>

      <View>
        <Text style={appStyles.textHeaderBlack}>
          Please select 3 traits that best describe your dog
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <View style={appStyles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={appStyles.textWhiteButton}>Playful</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={appStyles.textWhiteButton}>Energetic</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={appStyles.textWhiteButton}>Clever</Text>
          </TouchableOpacity>
        </View>

        <View style={appStyles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={appStyles.textWhiteButton}>Shy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={appStyles.textWhiteButton}>Reactive</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={appStyles.textWhiteButton}>Sleepy</Text>
          </TouchableOpacity>
        </View>

        <View style={appStyles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={appStyles.textWhiteButton}>Curious</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={appStyles.textWhiteButton}>Goofy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={appStyles.textWhiteButton}>Friendly</Text>
          </TouchableOpacity>
        </View>

        <View style={appStyles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={appStyles.textWhiteButton}>Adventurous</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={appStyles.textWhiteButton}>Chatty</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={appStyles.textWhiteButton}>Lazy</Text>
          </TouchableOpacity>
        </View>

        <View style={appStyles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={appStyles.textWhiteButton}>Fluffy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={appStyles.textWhiteButton}>Loyal</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={appStyles.textWhiteButton}>Affectionate</Text>
          </TouchableOpacity>
        </View>

        <View style={appStyles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={appStyles.textWhiteButton}>Protective</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={appStyles.textWhiteButton}>Spoiled</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={appStyles.textWhiteButton}>Foodie</Text>
          </TouchableOpacity>
        </View>

        <View style={appStyles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={appStyles.textWhiteButton}>Dopey</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={appStyles.textWhiteButton}>Slobbery</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={appStyles.textWhiteButton}>Trickster</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("Upload")}>
        <FontAwesomeIcon
          icon={faArrowRight}
          size={50}
          style={styles.forwardIconWhite}
        />
      </TouchableOpacity>
      <BonePatternSvg style={styles.backgroundBottom} />
    </View>
  );
};

export default TraitsScreen;
