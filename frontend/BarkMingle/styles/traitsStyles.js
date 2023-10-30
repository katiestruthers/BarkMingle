import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6263AF",
  },
  buttonRow: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    paddingTop: 35,
  },
  backIconWhite: {
    color: '#FFFCF6',
    position: 'absolute',
    top: -60,
    right: 120,
  },
  forwardIconWhite: {
    color: '#FFFCF6',
    position: 'absolute',
    bottom: -70,
    right: -160,
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
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: "60%",
  },
  button: {
    marginHorizontal: 10,
    marginVertical: 15,
    backgroundColor: "#A5A7FB",
    borderRadius: 30,
    paddingHorizontal: 20,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    overflow: 'visible',
  },
  activeButton: {
    marginHorizontal: 10,
    marginVertical: 15,
    backgroundColor: "#A5A7FB",
    borderRadius: 30,
    paddingHorizontal: 20,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    overflow: 'visible',
    backgroundColor: "#1E1E1E"
  },
  
});

export default styles;