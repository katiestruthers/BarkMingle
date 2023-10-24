import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  flex: {
    flex: 1,
  },
  background: {
    width: '100%', 
    height: '100%',
    justifyContent: 'flex-start',
    alignContent: "center",
    backgroundColor: "#ffffff"
  },
  nameText: {
    fontSize: 30,
    fontWeight: "400",
    padding: 20,
    color: "#000000",
  },
  textBox: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 50,
  },
  avatar: {
    width: 350, 
    height: "80%", 
    borderRadius: 10,
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
  spread: {
    padding: 10,
    margin: 10,
    marginBottom: 10,
    alignSelf: "flex-end"
  },
  bio: {
    color: "#000000",
  }

});


export default styles;