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
  button: {
    backgroundColor: "#c7b6f0",
    borderRadius: 30,
    width: "80%",
    height: 45,
    textAlign: "center",
    marginTop: 70,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "500",
  },
  row: {
    alignItems: 'center',
    alignContent:"center",
    justifyContent: "center",
    flexDirection: "row"
  }


});


export default styles;