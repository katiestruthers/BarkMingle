import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",

  },
  card: {
    backgroundColor: "#D2D1F8",
    width: "100%",
    borderRadius: 20,
    margin: 10,
    flexDirection: "row",
  },
  avatar: {
    width: 30, 
    height: 30, 
    borderRadius: 400/ 2,
    padding: 25,
    margin: 10,
  },
  text: {
    alignItems: "flex-start",
    paddingRight: 120,
    justifyContent: "center",
  },
  name: {
    textAlign: "center"
  },
  left: {
    flexDirection: "row",
    alignItems: "center"
  },
  info: {
    padding: 10,
    marginLeft: 15,
  }


});


export default styles;