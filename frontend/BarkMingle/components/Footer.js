import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, Text, Button, ImageBackground, SafeAreaView, TouchableOpacity } from "react-native";
import styles from "../styles/footerStyles.js"
import { useTailwind }  from 'tailwind-rn'; 
import useAuth from "../hooks/useAuth.js";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { faDog } from '@fortawesome/free-solid-svg-icons/faDog';
import { faPaw } from '@fortawesome/free-solid-svg-icons/faPaw';


const Footer = () => {

  const tw = useTailwind();
  const navigation = useNavigation();

  return (
    <>
      <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
      <FontAwesomeIcon icon={ faPaw } size={50}/>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
      <FontAwesomeIcon icon={ faDog } size={50}/>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("UserProfile")}>
        <FontAwesomeIcon icon={ faUser } size={50}/>
      </TouchableOpacity>
    </>
      
  )
}

export default Footer