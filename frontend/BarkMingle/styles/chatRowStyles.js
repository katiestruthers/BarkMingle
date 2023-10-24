import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

  },
  card: {
    backgroundColor: "#D2D1F8",
    width: "80%",
    borderRadius: 20,
    margin: 10,
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
  }


});


export default styles;