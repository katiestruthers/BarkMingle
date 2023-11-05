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
    width: "100%",
    paddingTop: 350,
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
    height: 110,
    marginBottom: 5,
    marginTop: 5,
    paddingTop: 10,
    textAlignVertical: "top",
    alignItems: "flex-start",
  },
  textInputBio: {
    height: 90,
    fontSize: 16,
    paddingHorizontal: 10,
    fontFamily: "Baloo2_400Regular",
    width: "90%",
    alignSelf: 'center',
  },
  textPurple: {
    color: '#6263AF',
    fontFamily: 'Baloo2_600SemiBold',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 5
  },
  imageContainer: {
    backgroundColor: '#D2D1F8',
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  uploadContainer: {
    height: "5%",
    justifyContent: 'flex-start',
  },
  image: {
    width: "95%",
    height: "95%",
    borderRadius: 50,
  },
  contentContainer: {
    alignItems: "center",
    height: '60%',
    width: "100%",
    paddingTop: 40,
  },
});

export default styles;