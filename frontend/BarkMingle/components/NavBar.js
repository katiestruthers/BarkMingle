import { useNavigation } from "@react-navigation/core";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { faDog } from "@fortawesome/free-solid-svg-icons/faDog";
import { faPaw } from "@fortawesome/free-solid-svg-icons/faPaw";
import styles from "../styles/navBarStyles";
import { SafeAreaView } from "react-native-safe-area-context";

const NavBar = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.navBar}>  
      <TouchableOpacity onPress={() => navigation.navigate("ChannelList")}>
        <FontAwesomeIcon icon={faPaw} size={40} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <FontAwesomeIcon icon={faDog} size={40} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("UserProfile")}>
        <FontAwesomeIcon icon={faUser} size={40} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default NavBar;
