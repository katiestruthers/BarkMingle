import { Text, View } from "react-native";
import ProgressBar from "./ProgressBar";
import styles from "../styles/uploadingStyles";

const Uploading = ({ progress}) => {
  return (
      <View 
        style={styles.container}
      >
        <Text style={styles.text}>Uploading . . .</Text>
        <ProgressBar progress={progress} />

      </View>
  )
}

export default Uploading