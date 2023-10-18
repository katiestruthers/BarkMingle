import { View, StyleSheet } from "react-native"
import EmptyState from "../components/EmptyState";

export default function Upload() {
  return (
    <View style={styles.container}>
      <EmptyState />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});