import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    width: '100%', 
    height: '100%',
    alignItems: "center",
    justifyContent: "space-between",
  },
  cards: {
    position: "relative",
    borderRadius: 20,
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#ffffff",
    height: "60%",
    width: "97%",
    shadowColor: "#000",
    shadowOffset: {
      width:0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 10,
  },
  cardImage: {
    height: "100%",
    width: "100%",
    borderRadius: 20,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  buttons:{
    flexDirection: "row",
    justifyContent: 'space-around',
    marginBottom: 25,
    alignItems: 'center',
    width: "100%",
  },
  buttonsCircle: {
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(252, 252, 252)',
    borderRadius: 50,
    shadowColor: "#6263AF",
    shadowOffset: {
      width:0,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 10,
  },
  text: {
    paddingHorizontal: 10,
  },
  purpleContainer: {
    margin: 5,
    paddingVertical: 2,
    paddingHorizontal: 10,
    backgroundColor: '#A5A7FBB2',
    borderRadius: 20,
    height: 30,
    alignSelf: 'flex-end'
  },
  name: {
    color: '#ffffff',
    fontSize: 50,
    fontFamily: 'Baloo2_600SemiBold',
    top: 15,
  },
  bio:{
    color: "#ffffff",
  },
  spread: {
    padding: 10,
    alignSelf: "flex-end"
  },
  humanProfileBox: {
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "space-around",
    padding: 15,
    backgroundColor: 'rgb(252, 252, 252)',
    borderRadius: 30,
    width: "100%",
    height: "30%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 10,
  },
  textContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  textBlack: {
    color: '#1E1E1E',
    fontSize: 15,
    fontFamily: 'Baloo2_600SemiBold',
    textAlign: 'left',
  },
  textName: {
    color: '#1E1E1E',
    fontSize: 18,
    fontFamily: 'Baloo2_600SemiBold',
    textAlign: 'left',
  },
  textWhite: {
    color: '#FFFCF6',
    fontSize: 15,
    fontFamily: 'Baloo2_600SemiBold',
    alignSelf: 'center',
  },
  textPurple: {
    color: '#6263AF',
    fontSize: 14,
    fontFamily: 'Baloo2_600SemiBold',
    textAlign: 'left',
    width: 210,
  },
  avatar: {
    width: 70, 
    height: 70, 
    borderRadius: 400/ 2,
    marginRight: 20,
    borderColor: '#6263AF',
    borderWidth: 3,
  },
  petInfoContainer: {
    margin: 10,
    top: 240,
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

