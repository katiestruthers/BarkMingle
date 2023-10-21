import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  navBar: {
    width: "100%",
    height: 75,
    paddingBottom: 10,
    backgroundColor: "#6a63c9",
    flexDirection: "row",
    alignContent: "center",
    alignItems: "flex-end",
    justifyContent: "space-evenly",
  },
  flex: {
    flex: 1,
  },
  background: {
    width: '100%', 
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  nameText: {
    fontSize: 30,
    fontWeight: 400,
    padding: 20,
  },
  textBox: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  avatar: {
    width: 200, 
    height: 200, 
    borderRadius: 400/ 2,
    marginBottom: 50,
  },
  textInput: {
    height: 50,
    flex: 1,
    padding: 10,
    textAlign: 'center',
  },
  logoutButton: {
    backgroundColor: "#c7b6f0",
    borderRadius: 30,
    width: "35%",
    height: 45,
    marginBottom: 10,
    marginTop: 10,
    alignItems: "center",
  },


});


export default styles;