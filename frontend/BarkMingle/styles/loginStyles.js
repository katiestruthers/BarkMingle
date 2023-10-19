import { StyleSheet } from "react-native";

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
  inputView: {
    backgroundColor: "#ede7d5",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    marginTop: 20,
    alignItems: "center",
  },
  textInput: {
    height: 50,
    flex: 1,
    padding: 10,
    textAlign: 'center',
  },
  loginButton: {
    backgroundColor: "#3489eb",
    borderRadius: 30,
    width: "35%",
    height: 45,
    marginBottom: 10,
    marginTop: 10,
    alignItems: "center",
  },
})


export default styles;

