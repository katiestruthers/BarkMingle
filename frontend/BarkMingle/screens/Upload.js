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
import ProgressBar from "../components/ProgressBar";
import { Uploading } from "../components/Uploading";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

export default function Upload() {

  const [image, setImage] = useState("");

  async function pickImage() {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 4],
      quality: 1
    })

    if (!result.canceled) {
      setImage(results.assets[0].uri);
      // upload the image
    }

  }

  return (
    <View style={styles.container}>
      <Uploading />
      <ProgressBar progress={60} />
      <TouchableOpacity
        onPress={pickImage}
        style={{
          position: "absolute",
          bottom: 50,
          width: 44,
          height: 44,
          justifyContent: "center",
          backgroundColor: "black",
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
