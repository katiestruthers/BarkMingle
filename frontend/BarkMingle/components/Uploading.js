import { Image, Text, View, TouchableOpacity} from "react-native";
import ProgressBar from "./ProgressBar";
import styles from "../styles/uploadingStyles";

const Uploading = ({image, progress}) => {
  return (
      <View 
        style={styles.container}
      >
        {image && (
          <Image 
            source={{ uri: image }}
            style={styles.image}
          />
        )}
        <Text>Uploading...</Text>
        <ProgressBar progress={60} />
        <View
          style={styles.divider}
        />
          <TouchableOpacity>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
      </View>
  )
}

export default Uploading