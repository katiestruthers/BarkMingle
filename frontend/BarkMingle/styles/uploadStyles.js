import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFCF6",
  },
  contentContainer: {
    alignItems: "center",
    justifyContent: "flex-start",
    height: '60%',
    width: "100%",
    paddingTop: 5,
  },
  inputView: {
    backgroundColor: "#D2D1F8",
    borderRadius: 30,
    width: "85%",
    height: 40,
    marginBottom: 5,
    marginTop: 5,
    alignItems: "center",
  },
  inputViewBio: {
    backgroundColor: "#D2D1F8",
    borderRadius: 30,
    width: "85%",
    height: 150,
    marginBottom: 5,
    marginTop: 5,
    alignItems: "center",
  },
  textHeaderBlack: {
    color: "#1E1E1E",
    fontSize: 18,
    fontFamily: "Baloo2_800ExtraBold",
    alignSelf: "flex-start",
    left: 30,
  },
  textPurple: {
    color: "#6263AF",
    fontFamily: "Baloo2_600SemiBold",
    fontSize: 18,
    textAlign: "center",
  },
  backgroundTop: {
    position: "absolute",
    zIndex: -1,
    top: 0,
  },
  backgroundBottom: {
    position: "absolute",
    zIndex: -1,
    bottom: -48,
  },
  imageIcon: {
    justifyContent: "center",
    color: "#6263AF",
    alignItems: "center",
    borderRadius: 25,
  },
  imageIconHolder: {
    justifyContent: "center",
    backgroundColor: "#D2D1F8",
    alignItems: "center",
    width: 80,
    height: 80,
    borderRadius: 25,
    marginBottom: 40,
  },
  flatlist: {
    width: '34%',
    height: '80%',
  },
  image: {
    width: "95%",
    height: "95%",
    borderRadius: 10,
  },
  imageContainer: {
    backgroundColor: '#D2D1F8',
    width: "85%",
    height: "80%",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  }
});

export default styles;
