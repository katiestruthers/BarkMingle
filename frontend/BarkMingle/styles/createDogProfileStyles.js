import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFCF6",
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    paddingTop: 35,
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
  textHeaderBlack: {
    color: '#1E1E1E',
    fontSize: 18,
    fontFamily: 'Baloo2_800ExtraBold',
    alignSelf: "flex-start",
    left: 30,
  },
  backgroundTop: {
    position: 'absolute',
    zIndex: -1,
    top: 0,
  },
  backgroundBottom: {
    position: 'absolute',
    zIndex: -1,
    bottom: -48,
  },
});

export default styles;