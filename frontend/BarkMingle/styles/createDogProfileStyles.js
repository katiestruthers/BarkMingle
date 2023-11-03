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
    width: "83%",
    height: 45,
    marginBottom: 5,
    marginTop: 5,
    alignItems: "flex-start",
  },
  dropDownView1: {
    borderRadius: 30,
    width: "85%",
    height: 45,
    marginBottom: 5,
    marginTop: 5,
    alignItems: "center",
    zIndex: 4,
  },
  dropDownView2: {
    borderRadius: 30,
    width: "85%",
    height: 40,
    marginBottom: 5,
    marginTop: 5,
    alignItems: "flex-start",
    zIndex: 3,
  },
  dropDownView3: {
    borderRadius: 30,
    width: "85%",
    height: 40,
    marginBottom: 5,
    marginTop: 5,
    alignItems: "flex-start",
    zIndex: 2,
  },
  dropDownView4: {
    borderRadius: 30,
    width: "85%",
    height: 40,
    marginBottom: 15,
    marginTop: 5,
    alignItems: "flex-start",
    zIndex: 1,
  },
  dropDownScroll1: {
    backgroundColor: "#D9D9D9",
    borderColor: '#D9D9D9',
    borderRadius: 10,
    height: 175,
  },
  dropDownScroll2: {
    backgroundColor: "#D9D9D9",
    borderColor: '#D9D9D9',
    borderRadius: 10,
    height: 100,
  },
  dropDownScroll3: {
    backgroundColor: "#D9D9D9",
    borderColor: '#D9D9D9',
    borderRadius: 10,
    height: 140,
  },
  dropDown: {
    backgroundColor: "#D2D1F8",
    borderRadius: 30,
    width: 325,
    height: 45,
    alignItems: "flex-start",
    borderColor: '#D2D1F8'
  },
  textHeaderBlack: {
    color: '#1E1E1E',
    fontSize: 18,
    fontFamily: 'Baloo2_800ExtraBold',
    alignSelf: "flex-start",
    left: 30,
  },
});

export default styles;