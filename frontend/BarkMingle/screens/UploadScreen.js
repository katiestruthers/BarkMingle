import { useNavigation } from "@react-navigation/core";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import appStyles from "../styles/appStyles.js";
import styles from "../styles/uploadStyles.js";
import useAuth from "../hooks/useAuth.js";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faImage,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import BonePatternSvg from "../svg-images/BonePatternSvg.js";
import StatusBarSvg3 from "../svg-images/StatusBarSvg3.js";
import Uploading from "../components/Uploading.js";
import * as ImagePicker from "expo-image-picker";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { storage, db } from "../firebaseConfig";

const UploadScreen = () => {
  const { user } = useAuth();

  const navigation = useNavigation();

  const [image, setImage] = useState("");
  const [progress, setProgress] = useState(0);
  const [files, setFiles] = useState([]);

  useEffect(() => {
    // use snapshot to capture each file added, iterate through all docs in db with change type "added" to files array
    const unsubscribe = onSnapshot(collection(db, "photos"), (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          console.log("New file", change.doc.data());
          setFiles((prevFiles) => [...prevFiles, change.doc.data()]);
        }
      });
    });

    return () => unsubscribe();
  }, []);


  async function pickImage() {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 4],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      // upload the image
      await uploadImage(result.assets[0].uri, "image");
    }
  }

  async function uploadImage(uri, fileType) {
    const response = await fetch(uri);
    const blob = await response.blob();

    const storageRef = ref(storage, "Photos/" + new Date().getTime());
    const uploadTask = uploadBytesResumable(storageRef, blob);

    // listener for upload
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        setProgress(progress.toFixed());
      },
      (error) => {
        console.error(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          console.log("File available at", downloadURL);
          // save record
          await saveRecord(fileType, downloadURL, new Date().toISOString());
          setImage("");
        });
      }
    );
  }

  async function saveRecord(fileType, url, createdAt) {
    try {
      const docRef = await addDoc(collection(db, "photos"), {
        fileType,
        url,
        createdAt,
      });
      console.log("document saved correctly", docRef.id);
    } catch (e) {
      console.log(e);
    }
  }

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

      {image && <Uploading image={image} progress={progress}/>}
      <TouchableOpacity
        onPress={pickImage}
        style={styles.imageHolder}
      >
        <FontAwesomeIcon icon={faImage} size={50} style={styles.imageIcon} />
      </TouchableOpacity>

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

export default UploadScreen
