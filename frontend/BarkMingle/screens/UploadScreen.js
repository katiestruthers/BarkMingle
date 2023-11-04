import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import appStyles from "../styles/appStyles.js";
import styles from "../styles/uploadStyles.js";
import useAuth from "../hooks/useAuth.js";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faImage,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import FullScreenBgSvg from "../svg-images/FullScreenBgSvg.js";
import StatusBarSvg3 from "../svg-images/StatusBarSvg3.js";
import Uploading from "../components/Uploading.js";
import useFileUpload from "../hooks/useFileUpload.js";
import Axios from "axios";

const UploadScreen = () => {
  const { token, setToken } = useAuth();

  const navigation = useNavigation();

  const headers = {
    authorization: `Bearer ${token}`,
  };

  const { pickImage, image, progress, dogImage } = useFileUpload();

  const onSubmit = () => {
    Axios.post("http://localhost:8080/api/dogs/images", {
      img: dogImage
    }, { headers }).then(res => {
    }).catch(err => console.log(err));
    navigation.navigate("CreateUserProfile");
  };

  return (
    <View style={appStyles.containerWhite}>
      <FullScreenBgSvg style={appStyles.backgroundFull} />
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

      <View style={styles.contentContainer}>
        <View>
          {image ? (
            <Uploading image={image} progress={progress} />
          ) : (
            <TouchableOpacity
              onPress={pickImage}
              style={styles.imageIconHolder}
            >
              <FontAwesomeIcon
                icon={faImage}
                size={30}
                style={styles.imageIcon}
              />
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.imageContainer}>
          {dogImage && (
            <Image
              source={{ uri: dogImage }}
              style={styles.image}
            />
          )}
        </View>
      </View>

      <TouchableOpacity
        onPress={onSubmit}
      >
        <FontAwesomeIcon
          icon={faArrowRight}
          size={50}
          style={appStyles.forwardIconPurple}
        />
      </TouchableOpacity>
    </View>
  );
};

export default UploadScreen;
