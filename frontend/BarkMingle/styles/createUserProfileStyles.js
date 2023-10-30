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
    alignItems: "flex-start",
  },
  inputViewBio: {
    backgroundColor: "#D2D1F8",
    borderRadius: 30,
    width: "85%",
    height: 150,
    marginBottom: 5,
    marginTop: 5,
    paddingTop: 5,
    textAlignVertical: "top",
    alignItems: "flex-start",
  },
  textHeaderBlack: {
    color: '#1E1E1E',
    fontSize: 18,
    fontFamily: 'Baloo2_800ExtraBold',
    alignSelf: "flex-start",
    left: 30,
  },
  textPurple: {
    color: '#6263AF',
    fontFamily: 'Baloo2_600SemiBold',
    fontSize: 18,
    textAlign: 'center',
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
  imageContainer: {
    backgroundColor: '#D2D1F8',
    width: "50%",
    height: "10%",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  image: {
    width: "95%",
    height: "95%",
    borderRadius: 10,
  },
  contentContainer: {
    alignItems: "center",
    height: '60%',
    width: "100%",
  },
});

export default styles;