import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6263AF",
  },
  innerContainer: {
    height: '50%',
    alignItems: 'center',

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
  backIconWhite: {
    color: '#FFFCF6',
    position: 'absolute',
    top: -150,
    right: 120,
  },

})

export default styles;