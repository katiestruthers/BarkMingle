import React from "react";
import { InteractionManager, View, Button, Text, ImageBackground, TextInput, TouchableOpacity } from "react-native";
import useAuth from "../hooks/useAuth";
import { useNavigation } from "@react-navigation/core";
import styles from "../styles/loginStyles.js"



// Login screen component
const LoginScreen = () => {

  const { user } = useAuth();

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('../assets/dogbones.jpg')}
        style={styles.background}>

        <View style={styles.inputView}>
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            placeholderTextColor="#003f5c"
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
          />
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate("Login")}>
          <Text style={styles.textInput}> Sign In </Text>
        </TouchableOpacity>
      

      </ImageBackground>
    </View>
  )
}

export default LoginScreen