import { StyleSheet } from "react-native";


const styles = StyleSheet.create({

  background: {
    backgroundColor: "#654cb5",
    flex: 1,
    width: '100%', 
    height: '100%',
    alignItems: 'center',
  },
  flex:{
    flex: 1,
  },
  text: {
    textAlign: "center",
  },
  match: {
    textAlign: "center",
    color: "#ffffff",
    fontSize: 50,
  },
  message: {
    textAlign: "center",
    color: "#ffffff",
    fontSize: 20,
  },
  avatars: {
    flex: 1,
    flexDirection: "row",
    alignContent: "center",
    alignItems: "flex-end",
    justifyContent: "space-evenly",
  },
  avatar: {
    width: 90, 
    height: 90, 
    borderRadius: 400/ 2,
    marginTop: 10,
  },
  button: {
    backgroundColor: "#c7b6f0",
    borderRadius: 30,
    width: "50%",
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginTop: 70,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "500",
  },
  spread: {
    padding: 10,
    margin: 10,
    marginBottom: 90,
    alignSelf: "flex-end"
  },

})

export default styles;