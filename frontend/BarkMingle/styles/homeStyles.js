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
  background2: {
    width: '100%', 
    height: '100%',
  },
  cards: {
    zIndex: 3,
    elevation: 3,
    position: "relative",
    borderRadius: 20,
    padding: 10,
    paddingBottom: 20,
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#ffffff",
    height: "75%",
    width: "90%",
    shadowColor: "#000",
    shadowOffset: {
      width:0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  cardImage: {
    height: "90%",
    width: "100%",
    borderRadius: 10,
  },
  buttons:{
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 105,
  },
  name: {
    fontSize: 20,
    fontWeight: "500",
  },
  noProfiles: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: "center",
  },


  // container: { 
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center'
  //  },
  // background: {
  //   width: '100%', 
  //   height: '100%',
  //   justifyContent: 'space-between',
  //   alignItems: 'center'
  // },
  // inputView: {
  //   backgroundColor: "#ede7d5",
  //   borderRadius: 30,
  //   width: "70%",
  //   height: 45,
  //   marginBottom: 20,
  //   marginTop: 20,
  //   alignItems: "center",
  // },
  // textInput: {
  //   height: 50,
  //   flex: 1,
  //   padding: 10,
  //   marginLeft: 20,
  // },


})

export default styles;

