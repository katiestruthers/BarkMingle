import { View, Text } from "react-native"
import SvgComponent from "../assets/SVG";

export default function EmptyState() {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center'}}>
      <SvgComponent />
      <Text>Upload a photo!</Text>
    </View>
  );
}