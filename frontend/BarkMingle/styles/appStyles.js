import { StyleSheet } from "react-native";

const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6263AF",
  },
   background: {
    width: '100%', 
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    height: 50,
    flex: 1,
    padding: 10,
    textAlign: 'center',
  },
  textWhite: {
    color: '#FFFCF6',
    fontSize: 18,
    fontFamily: 'Baloo2_600SemiBold',
    fontWeight: '400',
    textAlign: 'center',
  },
  textSignIn: {
    color: '#1E1E1E',
    fontSize: 18,
    fontFamily: 'Baloo2_600SemiBold',
    textAlign: 'center',
    alignItems: 'center',
  },
  textLogoPurple: {
    color: '#6263AF',
    fontSize: 30,
    fontFamily: 'Baloo2_800ExtraBold',
  },
  textHeaderPurple: {
    color: '#6263AF',
    fontSize: 30,
    fontFamily: 'Baloo2_800ExtraBold',
    left: 30,
    paddingEnd: 50,
  },
  textHeaderBlack: {
    color: '#1E1E1E',
    fontSize: 30,
    fontFamily: 'Baloo2_800ExtraBold',
    left: 30,
    paddingEnd: 50,
  },
  textLogoBlack: {
    color: '#1E1E1E',
    fontSize: 30,
    fontFamily: 'Baloo2_800ExtraBold',
  },
  textBlackButton: {
    color: '#1E1E1E',
    fontSize: 18,
    fontFamily: 'Baloo2_800ExtraBold',
    alignSelf: "center",
  },
  textWhiteButton: {
    color: '#FFFCF6',
    fontSize: 18,
    fontFamily: 'Baloo2_800ExtraBold',
    alignSelf: "center",
  },
  backIconWhite: {
    color: '#FFFCF6',
    position: 'absolute',
    top: -120,
    right: 120,
  },
  forwardIconWhite: {
    color: '#FFFCF6',
    position: 'absolute',
    bottom: -100,
    right: -150,
  },
  backIconPurple: {
    color: '#6263AF',
    position: 'absolute',
    top: -80,
    right: 120,
  },
  forwardIconPurple: {
    color: '#6263AF',
    position: 'absolute',
    bottom: -90,
    right: -160,
  },
  inputView: {
    backgroundColor: "#D2D1F8",
    borderRadius: 30,
    width: "85%",
    height: 45,
    marginBottom: 20,
    marginTop: 10,
    alignItems: "center",
  },
  blackButton: {
    backgroundColor: "#1E1E1E",
    borderRadius: 30,
    width: "85%",
    height: 45,
    marginBottom: 10,
    marginTop: 20,
    alignItems: "center",
    justifyContent: 'center',
  },
  statusBar: {
    position: 'absolute',
    top: 60,
  },
  button: {
    flex: 1,
    margin: 10,
    width: "50%",
    backgroundColor: "#D2D1F8",
    borderRadius: 30,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    paddingEnd: 20,
    paddingStart: 20,
  },
})

export default appStyles;