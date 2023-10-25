import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  flexStart:{
    alignContent: "flex-start",
    justifyContent: "space-between"
  },
  flex: {
    flex: 1,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    width: "90%",
  },
  row: {
    flex: 1,
    width:"100%",
    alignItems: "center",
    flexDirection: "row",

  },

});


export default styles;