import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";
import appStyles from "../styles/appStyles.js";
import styles from "../styles/traitsStyles.js";
import useAuth from "../hooks/useAuth.js";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import BonePatternSvg from "../svg-images/BonePatternSvg.js";
import StatusBarSvg2 from "../svg-images/StatusBarSvg2.js";
import Axios from "axios";

const TraitsScreen = () => {
  const { token, setToken } = useAuth();
  console.log('Traits Token: ', token);
  const navigation = useNavigation();

  const [ traits, setTraits ] = useState([]);
  const [ selectedTraits, setSelectedTraits] = useState([]);
  useEffect( () => {
    Axios
      .get ("http://localhost:8080/api/dogs/traits")
      .then((response) => {
        setTraits(response.data);
      });
  }, []);

  const clickTrait = (trait) => {
    if ( selectedTraits.includes(trait.id)){
      setSelectedTraits(selectedTraits.filter((t)=> {
        if (trait.id === t) {
          console.log("REMOVE")
          return false
        } else {
          console.log("KEEP")
          return true
        }
      }))
    } else {
      if ( selectedTraits.length === 3 ) {
        return
      } 
      setSelectedTraits([...selectedTraits, trait.id])
    }
  }

  const headers = {
    authorization: `Bearer ${token}`,
  };
  state = { selectedItems : [] };

  const onSubmit = () => {
    Axios.post("http://localhost:8080/api/dogs/traits", {
    traits: selectedTraits
    }, { headers }).then(res => {
      navigation.navigate("Upload"); // Navigato to the "Traits" screen on success
    }).catch(err => console.log("error", err));
  };

  return (
    <View style={styles.container}>
      <BonePatternSvg style={styles.backgroundTop} />
      <StatusBarSvg2 style={appStyles.statusBar} />
      <TouchableOpacity onPress={() => navigation.navigate("CreateDogProfile")}>
        <FontAwesomeIcon
          icon={faArrowLeft}
          size={50}
          style={styles.backIconWhite}
        />
      </TouchableOpacity>

      <View>
        <Text style={appStyles.textHeaderBlack}>
          Please select 3 traits that best describe your dog
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <View style={appStyles.buttonContainer}>
          {traits.map((trait, index) => {
            return <TouchableOpacity onPress={() => clickTrait(trait)} key={trait.id} style={styles.button}>
            <Text style={appStyles.textWhiteButton}>{ trait.name }</Text>
          </TouchableOpacity>
          })}
        </View>
      </View>

      <TouchableOpacity onPress={onSubmit}>
        <FontAwesomeIcon
          icon={faArrowRight}
          size={50}
          style={styles.forwardIconWhite}
        />
      </TouchableOpacity>
      <BonePatternSvg style={styles.backgroundBottom} />
    </View>
  );
};

export default TraitsScreen;
