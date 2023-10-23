import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6263AF",
  },
  upperContainer: {
    flex: 2.5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6263AF",
    width: "100%",
  },
  textContainer: {
    flex: 2,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#FFFCF6",
    width: "100%",
    paddingTop: 40,
  },
  image: {
    position: "absolute",
    bottom: 40,
    right:   10,
    width: 270,
    zIndex: -1,
    overflow: 'visible'
  },
  blob: {
    position: "absolute",
    bottom: 80,
    zIndex: -2,
  },
  textHeadingWhite: {
    color: '#FFFCF6',
    fontSize: 30,
    fontFamily: 'Baloo2_800ExtraBold',
    left: -100,
    top: -40,
  },
  textHeaderBlack: {
    color: '#1E1E1E',
    fontSize: 18,
    fontFamily: 'Baloo2_800ExtraBold',
    alignSelf: "flex-start",
    left: 30,
  },
  background: {
    position: 'absolute',
    zIndex: -1,
  },
});

export default styles;
