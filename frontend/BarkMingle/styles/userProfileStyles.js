import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  
  flex: {
    flex: 1,
    width: '100%', 
    height: '100%',
    alignItems: "center",
    justifyContent: "space-between",
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
  },
  textBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
    alignItems: "center",
    alignContent:"center",
  }


});


export default styles;