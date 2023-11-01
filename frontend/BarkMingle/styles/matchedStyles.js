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
    color: '#6263AF',
    fontFamily: 'Baloo2_800ExtraBold',
  },
  message: {
    textAlign: "center",
    color: "#000000",
    fontSize: 20,
    fontFamily: 'Baloo2_600SemiBold',
  },
  avatars: {
    flex: 1,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-evenly",
    marginTop: 15,
  },
  avatar: {
    width: 150, 
    height: 150, 
    borderRadius: 400/ 2,
    marginTop: 10,
    marginHorizontal: 20,
    borderColor: "#D2D1F8",
    borderWidth: 5,
  },
  button: {
    backgroundColor: "#6263AF",
    borderRadius: 30,
    width: "60%",
    height: 45,
    justifyContent: "center",
    marginBottom: 200,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "500",
    color: "#ffffff",
    fontFamily: 'Baloo2_600SemiBold',
  },
  spread: {
    padding: 10,
    margin: 10,
    marginBottom: 90,
    alignSelf: "flex-end"
  },
  gif: {
    zIndex: -1,
    position: 'absolute',
  },

})

export default styles;