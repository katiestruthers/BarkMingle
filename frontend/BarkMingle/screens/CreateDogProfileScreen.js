import { useNavigation } from "@react-navigation/core";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Platform,
} from "react-native";
import appStyles from "../styles/appStyles.js";
import styles from "../styles/createDogProfileStyles.js";
import useAuth from "../hooks/useAuth.js";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import FullScreenBgSvg from "../svg-images/FullScreenBgSvg.js";
import StatusBarSvg1 from "../svg-images/StatusBarSvg1.js";
import Axios from "axios";
// https://www.npmjs.com/package/react-native-dropdown-select-list
import { SelectList } from "react-native-dropdown-select-list";

const CreateDogProfileScreen = () => {
  const { token } = useAuth();
  const navigation = useNavigation();

  const headers = {
    authorization: `Bearer ${token}`,
  };

  const [name, setName] = useState("");
  const [breeds, setBreeds] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [size, setSize] = useState("");
  const [isNeutered, setIsNeutered] = useState(true);


  const dataGender = [{ value: "Male" }, { value: "Female" }];
  const dataSize = [
    { value: "Small" },
    { value: "Medium" },
    { value: "Large" },
  ];
  const dataAge = [
    { value: "Less than a year" },
    { value: "1" },
    { value: "2" },
    { value: "3" },
    { value: "4" },
    { value: "5" },
    { value: "6" },
    { value: "7" },
    { value: "8" },
    { value: "9" },
    { value: "10" },
    { value: "11" },
    { value: "12" },
    { value: "13" },
    { value: "13+" },
  ];
 
  useEffect( () => {
    Axios
      .get ("http://localhost:8080/api/dogs/breeds")
      .then((response) => {
        let newArray = response.data.map((item) => {
          return { key: item.id, value: item.name }
      });
      setBreeds(newArray)
    })
  }, []);


  const onSubmit = () => {
    Axios.post("http://localhost:8080/api/dogs/signup", {
      name,
      breeds,
      gender,
      age,
      size,
      is_neutered: isNeutered
    }, { headers }).then(res => {
      navigation.navigate("Traits"); // Navigato to the "Traits" screen on success
    }).catch(err => console.log(err));
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <FullScreenBgSvg style={appStyles.backgroundFull} />
      <StatusBarSvg1 style={appStyles.statusBar} />
      <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
        <FontAwesomeIcon
          icon={faArrowLeft}
          size={50}
          style={appStyles.backIconPurple}
        />
      </TouchableOpacity>
      <View>
        <Text style={appStyles.textHeaderPurple}>
          Let's get a profile started for your dog
        </Text>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.textHeaderBlack}>Dog Name *</Text>
        <View style={styles.inputView}>
          <TextInput
            style={appStyles.textInput}
            onChangeText={(text)=>setName(text)}
          />
        </View>

        <Text style={styles.textHeaderBlack}>Breed * </Text>
        <View style={styles.dropDownView1}>
          <SelectList
            data={breeds}
            setSelected={(text) => setBreeds(text)}
            fontFamily="Baloo2_400Regular"
            boxStyles={styles.dropDown}
            dropdownStyles={styles.dropDownScroll1}
          />
        </View>

        <Text style={styles.textHeaderBlack}>Gender * </Text>
        <View style={styles.dropDownView2}>
          <SelectList
            data={dataGender}
            setSelected={(text) => setGender(text)}
            fontFamily="Baloo2_400Regular"
            boxStyles={styles.dropDown}
            dropdownStyles={styles.dropDownScroll2}
            dropdownTextStyles={styles.text}
            search={false}
            maxHeight={200}
          />
        </View>

        <Text style={styles.textHeaderBlack}>Age * </Text>
        <View style={styles.dropDownView3}>
          <SelectList
            data={dataAge}
            setSelected={(text)=>setAge(text)}
            fontFamily="Baloo2_400Regular"
            boxStyles={styles.dropDown}
            dropdownStyles={styles.dropDownScroll1}
            dropdownTextStyles={styles.text}
            search={false}
            maxHeight={200}
          />
        </View>

        <Text style={styles.textHeaderBlack}>Size * </Text>
        <View style={styles.dropDownView4}>
          <SelectList
            data={dataSize}
            setSelected={(text) => setSize(text)}
            fontFamily="Baloo2_400Regular"
            boxStyles={styles.dropDown}
            dropdownStyles={styles.dropDownScroll3}
            dropdownTextStyles={styles.text}
            search={false}
            maxHeight={200}
          />
        </View>

        <Text style={styles.textHeaderBlack}>Spayed / Neutered? * </Text>
        <View style={appStyles.buttonContainer}>
          <TouchableOpacity
            style={isNeutered ? appStyles.activeButton : appStyles.button}
            onPress={() => setIsNeutered(true)}
          >
            <Text style={isNeutered ? appStyles.textPurpleButton : appStyles.textBlackButton}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={!isNeutered ? appStyles.activeButton : appStyles.button}
            onPress={() => setIsNeutered(false)}
          >
            <Text style={!isNeutered ? appStyles.textPurpleButton : appStyles.textBlackButton}>No</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity onPress={onSubmit}>
        <FontAwesomeIcon
          icon={faArrowRight}
          size={50}
          style={appStyles.forwardIconPurple}
        />
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default CreateDogProfileScreen;
