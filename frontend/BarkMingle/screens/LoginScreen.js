import React, { useLayoutEffect } from "react";
import { InteractionManager, View, Text, Button, ImageBackground, TextInput } from "react-native";
import useAuth from "../hooks/useAuth";
import { useNavigation } from "@react-navigation/core";
import { useTailwind }  from 'tailwind-rn';
import styles from "../styles/loginStyles.js"



// Login screen component
const LoginScreen = () => {

  // To use Tailwind styling:
  // const tw = useTailwind();

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
      
        <Button title="Sign In" />
      </ImageBackground>
    </View>
  )
}

export default LoginScreen