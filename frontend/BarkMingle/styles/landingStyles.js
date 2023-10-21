import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: { 
    paddingTop: 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFCF6',
   },
   upperContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
   },
   textContainer: { 
    flex: 2,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6263AF',
    borderRadius: 40,
    flexShrink: 1,
   },
  getStartedButton: {
    backgroundColor: "#A5A7FB",
    borderRadius: 30,
    width: 200,
    height: 45,
    marginBottom: 10,
    marginTop: 10,
    alignItems: "center",
    justifyContent: 'center',
  },
  image: {
    position: 'absolute',
    bottom: 0,
    flexShrink: 0,
    zIndex: 2,
  },
  blob: {
    position: 'absolute',
    bottom: 0,
    zIndex: -1,
  },
  bg: {
    position: 'absolute',
    bottom: 0,
    zIndex: -1,
  }
})


export default styles;