import { Image, Text, StyleSheet, View, Button, TouchableOpacity} from "react-native";
import ProgressBar from "./ProgressBar";

export function Uploading({image, progress}) {
  return (
      <View 
        style={{
        width: 250,
        height: 100,
        alignItems: "center",
        paddingVertical: 16,
        rowGap: 12,
        backgroundColor: "#D2D1F8",
        borderRadius: 6,
        }}
      >
        {image && (
          <Image 
            source={{ uri: image }}
            style={{
              width: 100,
              height: 100,
              resizeMode: "contain",
              borderRadius: 6,
            }}
          />
        )}
        <Text>Uploading...</Text>
        <View
          style={{
            height: 1,
            borderWidth: StyleSheet.hairlineWidth,
            width: "100%",
            borderColor: "#00000020",
          }}
        />
          <TouchableOpacity>
            <Text style={{ fontWeight: "500", color: "#3478F6", fontSize: 17, alignSelf: "center"}}>Cancel</Text>
          </TouchableOpacity>
      </View>
  )
}