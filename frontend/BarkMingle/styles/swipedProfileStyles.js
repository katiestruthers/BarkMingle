import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

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
    color: "#ffffff",
  },
  textBox: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  avatar: {
    width: 300, 
    height: 300, 
    borderRadius: 10,
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
  spread: {
    padding: 10,
    margin: 10,
    marginBottom: 90,
    alignSelf: "flex-end"
  },
  bio: {
    color: "#ffffff",
  }

});


export default styles;