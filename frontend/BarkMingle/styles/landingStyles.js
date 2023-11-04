import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFCF6',
   },
   upperContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
   },
   textLogo: {
    paddingTop: 60,
   },
   textLogoPurple: {
    color: "#6263AF",
    fontSize: 34,
    fontFamily: "Baloo2_800ExtraBold",
  },
  textLogoBlack: {
    color: "#1E1E1E",
    fontSize: 34,
    fontFamily: "Baloo2_800ExtraBold",
  },
  landingDescription: {
    color: "#FFFCF6",
    fontSize: 22,
    fontFamily: "Baloo2_600SemiBold",
    textAlign: "center",
    alignSelf: 'center',
    width: '90%',
    paddingTop: 85,
  },
   textContainer: { 
    flex: 1.75,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6263AF',
    borderRadius: 40,
   },
   textAlignView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
   },
   textDescription: {
    width: '80%',
    top: -60,
   },
  getStartedButton: {
    backgroundColor: "#A5A7FB",
    borderRadius: 30,
    width: 250,
    height: 50,
    marginTop: 50,
    marginBottom: 15,
    alignSelf: "center",
    justifyContent: 'center',
  },
  textGetStarted: {
    color: "#FFFCF6",
    fontSize: 20,
    fontFamily: "Baloo2_600SemiBold",
    textAlign: "center",
  },
  image: {
    position: 'absolute',
    bottom: -1,
    flexShrink: 0,
    zIndex: 2,
  },
  blob: {
    position: 'absolute',
    bottom: 10,
    zIndex: -1,
  },
  background: {
    position: 'absolute',
    zIndex: -1,
  },
})


export default styles;