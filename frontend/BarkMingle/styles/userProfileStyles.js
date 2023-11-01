import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  
  flex: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  background: {
    width: "100%", 
    height: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  nameText: {
    fontSize: 30,
    fontWeight: "400",
    padding: 20,
  },
  textBox: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  avatar: {
    width: 200, 
    height: 200, 
    borderRadius: 400/ 2,
    marginBottom: 50,
  },
  button: {
    backgroundColor: "#6263AF",
    borderRadius: 30,
    width: 300,
    height: 45,
    textAlign: "center",
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "500",
    color: "#ffffff"
  },
  buttonGroup: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    alignContent:"center",
    marginVertical: 100,
  }


});


export default styles;