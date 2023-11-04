import { StyleSheet } from "react-native";

const appStyles = StyleSheet.create({
  
  // container styles
  containerPurple: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6263AF",
  },
  containerWhite: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFCF6",
  },
  buttonContainer: {
    flexDirection: "row",
    paddingEnd: 20,
    paddingStart: 20,
  },
  contentContainer: {
    alignItems: "center",
    justifyContent: "flex-start",
    height: '63%',
    width: "100%",
    paddingTop: 5,
  },

  // background styles
  background: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundHalf: {
    position: "absolute",
    zIndex: -1,
    bottom: 0,
  },
  backgroundFull: {
    position: "absolute",
    zIndex: -1,
  },

  // text styles
  textPurple: {
    fontFamily: "Baloo2_600SemiBold",
    color: "#6263AF",
    fontSize: 18,
  },
  textInput: {
    height: 50,
    marginHorizontal: 24,
    fontSize: 16,
    fontFamily: "Baloo2_400Regular",
    width: "90%",
  },
  textWhite: {
    color: "#FFFCF6",
    fontSize: 18,
    fontFamily: "Baloo2_600SemiBold",
    fontWeight: "400",
    textAlign: "center",
  },
  textSignIn: {
    color: "#1E1E1E",
    fontSize: 18,
    fontFamily: "Baloo2_600SemiBold",
    textAlign: "center",
    alignItems: "center",
  },
  textHeaderPurple: {
    color: "#6263AF",
    fontSize: 30,
    fontFamily: "Baloo2_800ExtraBold",
    paddingHorizontal: 10,
    width: 350,
    alignSelf: "center",
  },
  textHeaderBlack: {
    color: "#1E1E1E",
    fontSize: 30,
    fontFamily: "Baloo2_800ExtraBold",
    paddingHorizontal: 10,
    width: 350,
    alignSelf: "center",
  },
  textSmallHeaderBlack: {
    color: '#1E1E1E',
    fontSize: 18,
    fontFamily: 'Baloo2_800ExtraBold',
    alignSelf: "flex-start",
    left: 30,
  },
  textBlackButton: {
    color: "#1E1E1E",
    fontSize: 18,
    fontFamily: "Baloo2_800ExtraBold",
    alignSelf: "center",
  },
  textWhiteButton: {
    color: "#FFFCF6",
    fontSize: 18,
    fontFamily: "Baloo2_800ExtraBold",
    alignSelf: "center",
  },
  textPurpleButton: {
    color: "#6263AF",
    fontSize: 18,
    fontFamily: "Baloo2_800ExtraBold",
    alignSelf: "center",
  },
  textHeadingWhite: {
    color: '#FFFCF6',
    fontSize: 34,
    fontFamily: 'Baloo2_800ExtraBold',
    left: -90,
    top: -40,
  },

  // icon styles
  backIconWhite: {
    color: "#FFFCF6",
    position: "absolute",
    top: -120,
    right: 120,
  },
  forwardIconWhite: {
    color: "#FFFCF6",
    position: "absolute",
    bottom: -100,
    right: -150,
  },
  backIconPurple: {
    color: "#6263AF",
    position: "absolute",
    top: -70,
    right: 120,
  },
  forwardIconPurple: {
    color: "#6263AF",
    position: "absolute",
    bottom: -75,
    right: -160,
  },

  // input style
  inputView: {
    backgroundColor: "#D2D1F8",
    borderRadius: 30,
    width: "85%",
    height: 48,
    marginBottom: 20,
    marginTop: 10,
    alignItems: "flex-start",
  },

  // button styles
  blackButton: {
    backgroundColor: "#1E1E1E",
    borderRadius: 30,
    width: "85%",
    height: 45,
    marginBottom: 10,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  purpleButton: {
    backgroundColor: "#6263AF",
    borderRadius: 30,
    width: "60%",
    height: 45,
    marginBottom: 10,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  whiteButton: {
    backgroundColor: "#FFFCF6",
    borderRadius: 30,
    width: 250,
    height: 45,
    marginBottom: 10,
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  lightPurpleButton: {
    flex: 1,
    margin: 10,
    width: "50%",
    backgroundColor: "#D2D1F8",
    borderRadius: 30,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  activeButton: {
    flex: 1,
    margin: 10,
    width: "50%",
    backgroundColor: "#D2D1F8",
    borderRadius: 30,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1E1E1E",
  },
  
  linearGradient: {
    borderRadius: 20,
    bottom: 0,
    height: "100%",
    width: "100%",
    position: "relative",
  },
  noProfilesView: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "flex-start",
    position: "fixed",
    marginTop: 80,
  },

  statusBar: {
    position: "absolute",
    top: 60,
  },
});

export default appStyles;
