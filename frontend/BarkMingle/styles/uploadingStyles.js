import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: 250,
    alignItems: "center",
    paddingVertical: 16,
    rowGap: 12,
    backgroundColor: "#D2D1F8",
    borderRadius: 6,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    borderRadius: 6,
  },
  divider: {
    height: 1,
    borderWidth: StyleSheet.hairlineWidth,
    width: "100%",
    borderColor: "#00000020",
  },
  cancelText: {
    fontWeight: "500",
    color: "#3478F6",
    fontSize: 17,
    alignSelf: "center",
  },
});

export default styles;