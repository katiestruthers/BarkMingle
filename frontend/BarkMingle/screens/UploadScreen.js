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
import styles from "../styles/uploadStyles.js";
import useAuth from "../hooks/useAuth.js";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faImage, faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import BonePatternSvg from "../svg-images/BonePatternSvg.js";
import StatusBarSvg3 from "../svg-images/StatusBarSvg3.js";
import Uploading from "../components/Uploading.js";

const UploadScreen = () => {
  const { user } = useAuth();

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <BonePatternSvg style={styles.backgroundTop} />
      <StatusBarSvg3 style={appStyles.statusBar} />
      <TouchableOpacity onPress={() => navigation.navigate("Traits")}>
        <FontAwesomeIcon
          icon={faArrowLeft}
          size={50}
          style={appStyles.backIconPurple}
        />
      </TouchableOpacity>
      <View>
        <Text style={appStyles.textHeaderPurple}>
          Upload a photo of your dog
        </Text>
      </View>

      <TouchableOpacity
        // onPress={pickImage}
        style={styles.imageHolder}
      >
      <FontAwesomeIcon
        icon={faImage}
        size={50}
        style={styles.imageIcon}
      />
      </TouchableOpacity>

      <Uploading />

      <TouchableOpacity
        onPress={() => navigation.navigate("CreateUserProfile")}
      >
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

export default UploadScreen;
