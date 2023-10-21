import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View, Text, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import styles from "../styles/landingStyles.js"
import useAuth from '../hooks/useAuth.js';

const LandingScreen = () => {

  const { user } = useAuth();
  
  const navigation = useNavigation();

    return (
      <View style={styles.container}>


        <View>
          <TouchableOpacity style={styles.getStartedButton} onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.text}> Get Started </Text>
          </TouchableOpacity> 

          <Text style={styles.text}> 
            Already have an account? 
            <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
              <Text style={styles.textSignIn}> Sign In</Text>
            </TouchableOpacity>
          
          </Text>
          
         
        </View>
      </View>

  )
};
   
export default LandingScreen                             