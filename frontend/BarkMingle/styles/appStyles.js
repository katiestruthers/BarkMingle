import { StyleSheet } from "react-native";

const appStyles = StyleSheet.create({
  container: { 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFCF6',
   },
   background: {
    width: '100%', 
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    height: 50,
    flex: 1,
    padding: 10,
    textAlign: 'center',
  },
  textWhite: {
    color: '#FFFCF6',
    fontSize: 18,
    fontFamily: 'Baloo2_600SemiBold',
    fontWeight: '400',
    textAlign: 'center',
  },
  textSignIn: {
    color: '#1E1E1E',
    fontSize: 18,
    fontFamily: 'Baloo2_600SemiBold',
  },
  textLogoPurple: {
    color: '#6263AF',
    fontSize: 30,
    fontFamily: 'Baloo2_800ExtraBold',
  },
  textLogoBlack: {
    color: '#1E1E1E',
    fontSize: 30,
    fontFamily: 'Baloo2_800ExtraBold',
  },
  backIcon: {
    color: '#FFFCF6'
  },
  inputView: {
    backgroundColor: "#D2D1F8",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    marginTop: 20,
    alignItems: "center",
  },
  blackButton: {
    backgroundColor: "#1E1E1E",
    borderRadius: 30,
    width: "35%",
    height: 45,
    marginBottom: 10,
    marginTop: 10,
    alignItems: "center",
    justifyContent: 'center',

}, 

})

export default appStyles;