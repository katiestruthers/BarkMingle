import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFCF6",
  },
  header: {
    width: "100%",
    height: "35%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6263AF",
  },
  nameText: {
    fontSize: 30,
    marginBottom: 30,
    fontFamily: "Baloo2_800ExtraBold",
    color: "#FFFCF6",
  },
  textBlack: {
    fontSize: 20,
    fontFamily: "Baloo2_800ExtraBold",
    color: "#1E1E1E",
  },
  textBio: {
    fontSize: 15,
    fontFamily: "Baloo2_500Medium",
    color: "#1E1E1E",
  },
  textBox: {
    justifyContent: "center",
    alignItems: "left",
    marginTop: 70,
    marginHorizontal: 25,
  },
  dogAvatar: {
    width: 200,
    height: 200,
    borderRadius: 400 / 2,
    bottom: 470,
    borderColor: "#FFFCF6",
    borderWidth: 6,
    position: "absolute",
  },
  line: {
    borderBottomColor: "#6263AF",
    borderBottomWidth: 2,
    width: 300,
    marginBottom: 10,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 400 / 2,
    bottom: 450,
    right: 60,
    borderColor: "#D2D1F8",
    borderWidth: 6,
    zIndex: 2,
    position: "absolute",
  },
  button: {
    backgroundColor: "#6263AF",
    borderRadius: 30,
    width: 300,
    height: 45,
    textAlign: "center",
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "500",
    color: "#ffffff",
    fontFamily: "Baloo2_800ExtraBold",
  },
  buttonGroup: {
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
});

export default styles;
