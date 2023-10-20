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
          <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate("Login")}>
            <Text style={styles.text}> Get Started </Text>
          </TouchableOpacity>
        </View>
      </View>

  )
};

export default LandingScreen