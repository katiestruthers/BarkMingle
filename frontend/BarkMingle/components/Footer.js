import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, Text, Button, ImageBackground, SafeAreaView } from "react-native";
import styles from "../styles/loginStyles.js"
import useAuth from "../hooks/useAuth.js";

const Footer = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>I am the footer</Text>
      
    </View>
  )
}

export default Footer