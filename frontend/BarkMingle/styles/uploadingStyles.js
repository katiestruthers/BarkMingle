import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 80,
    alignItems: "center",
    paddingVertical: 15,
    marginBottom: 40,
    rowGap: 12,
    backgroundColor: "#D2D1F8",
    borderRadius: 6,
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: "cover",
    borderRadius: 6,
  },
  text: {
    color: "#1E1E1E",
    fontSize: 13,
    fontFamily: "Baloo2_500Medium",
    alignSelf: "center",
  },
});

export default styles;
