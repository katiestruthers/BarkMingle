import { StyleSheet } from "react-native";
import { useFonts, Baloo} from '@expo-google-fonts/baloo-2'

const styles = StyleSheet.create({
  container: { 
    marginTop: 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
   },
  background: {
    width: '100%', 
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: "#A5A7FB",
    borderRadius: 30,
    width: 200,
    height: 45,
    marginBottom: 10,
    marginTop: 10,
    alignItems: "center",
  },
  text: {
    color: '#FFFCF6',
    fontSize: 18,
    fontFamily: 'Baloo2_600SemiBold',
    fontWeight: '400',
    wordWrap: 'break-word',
  }
})


export default styles;