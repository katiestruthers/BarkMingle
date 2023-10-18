import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Upload from "./screens/Upload"

export default function App() {
  return (
    <View style={styles.container}>
      <Upload />
      <Text style={styles.text}>The triumphant beginnings of Bark/Mingle </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    alignSelf: 'center',
  }
});


