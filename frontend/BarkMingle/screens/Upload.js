import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  LogBox,
  Image,
  FlatList,
} from "react-native";
import EmptyState from "../components/EmptyState";
import { Uploading } from "../components/Uploading";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { storage } from "../firebaseConfig";

export default function Upload() {
  const [image, setImage] = useState("");
  const [progress, setProgress] = useState(0);

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

    // listen for events
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        setProgress(progress.toFixed());
      },
      (error) => {
        // handle error
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          console.log("File available at", downloadURL);
          // save record
          setImage("");
        });
      }
    );
  }

  return (
    <View style={styles.container}>
      {image && <Uploading image={image} progress={progress} />}
      <TouchableOpacity
        onPress={pickImage}
        style={{
          position: "absolute",
          bottom: -50,
          width: 44,
          height: 44,
          justifyContent: "center",
          backgroundColor: "#1E1E1E",
          alignItems: "center",
          borderRadius: 25,
        }}
      >
        <Ionicons name="image" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});
