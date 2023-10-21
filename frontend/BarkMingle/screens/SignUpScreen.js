import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View, Text, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import styles from "../styles/signUpStyles.js"
import useAuth from '../hooks/useAuth.js';

const SignUp = () => {

  const { user } = useAuth();
  
  const navigation = useNavigation();

    return (
      <View style={styles.container}>
        <ImageBackground 
          source={require('../assets/purple.jpg')}
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
  
          <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate("GetStarted")}>
            <Text style={styles.textInput}> Back </Text>
          </TouchableOpacity>
        
        </ImageBackground>
      </View>

  )
};

export default SignUp