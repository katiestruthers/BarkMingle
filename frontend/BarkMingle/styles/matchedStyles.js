import { StyleSheet } from "react-native";


const styles = StyleSheet.create({

  background: {
    backgroundColor: "#ffffff",
    flex: 1,
    width: '100%', 
    height: '100%',
    alignItems: 'center',
    justifyContent: "center",
    alignContent: "center",
  },
  flex:{
    flex: 1,
  },
  text: {
    textAlign: "center",
  },
  match: {
    textAlign: "center",
    color: "#000000",
    fontSize: 50,
  },
  message: {
    textAlign: "center",
    color: "#000000",
    fontSize: 20,
  },
  avatars: {
    flex: 1,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-evenly",
    marginTop: 15,
  },
  avatar: {
    width: 90, 
    height: 90, 
    borderRadius: 400/ 2,
    marginTop: 10,
    marginHorizontal: 20
  },
  button: {
    backgroundColor: "#6263AF",
    borderRadius: 30,
    width: "50%",
    height: 45,
    justifyContent: "center",
    marginBottom: 200,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "500",
    color: "#ffffff"
  },
  spread: {
    padding: 10,
    margin: 10,
    marginBottom: 90,
    alignSelf: "flex-end"
  },

})

export default styles;