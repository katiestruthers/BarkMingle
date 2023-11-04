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

// Read more here: https://www.npmjs.com/package/react-native-dropdown-select-list
import { SelectList } from "react-native-dropdown-select-list";

const CreateDogProfileScreen = () => {
  const { token } = useAuth();
  const navigation = useNavigation();

  const headers = {
    authorization: `Bearer ${token}`,
  };

  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [size, setSize] = useState("");
  const [isNeutered, setIsNeutered] = useState(true);

  const [dataBreed, setDataBreed] = useState("");
  const [dataAge, setDataAge] = useState("");
  const dataGender = [{ value: "Male" }, { value: "Female" }];
  const dataSize = [
    { value: "Small" },
    { value: "Medium" },
    { value: "Large" },
  ];

  // Set dataAge for drop-down menu
  useEffect(() => {
    const dataAgeArray = [];

    dataAgeArray.push({ key: 0, value: "Less than a year"})
    for (i = 1; i <= 13; i++) {
      dataAgeArray.push({ key: i, value: i })
    };
    dataAgeArray.push({ key: 14, value: "13+"});

    setDataAge(dataAgeArray);
  }, []);
 
  // Set dataBreed for drop-down menu
  useEffect(() => {
    Axios
      .get ("http://localhost:8080/api/dogs/breeds")
      .then((response) => {
        let dataBreedArray = response.data.map((item) => {
          return { key: item.id, value: item.name }
      });
      setDataBreed(dataBreedArray)
    })
  }, []);

  
  const onSubmit = () => {
    Axios.post("http://localhost:8080/api/dogs/signup", {
      name,
      breed,
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
      style={appStyles.containerWhite}
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
        <Text style={appStyles.textSmallHeaderBlack}>Dog Name *</Text>
        <View style={styles.inputView}>
          <TextInput
            style={appStyles.textInput}
            onChangeText={(text)=>setName(text)}
          />
        </View>

        <Text style={appStyles.textSmallHeaderBlack}>Breed * </Text>
        <View style={styles.dropDownView1}>
          <SelectList
            data={dataBreed}
            setSelected={(text) => setBreed(text)}
            fontFamily="Baloo2_400Regular"
            boxStyles={styles.dropDown}
            dropdownStyles={styles.dropDownScroll1}
          />
        </View>

        <Text style={appStyles.textSmallHeaderBlack}>Gender * </Text>
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

        <Text style={appStyles.textSmallHeaderBlack}>Age * </Text>
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

        <Text style={appStyles.textSmallHeaderBlack}>Size * </Text>
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

        <Text style={appStyles.textSmallHeaderBlack}>Spayed / Neutered? * </Text>
        <View style={appStyles.buttonContainer}>
          <TouchableOpacity
            style={isNeutered ? appStyles.activeButton : appStyles.lightPurpleButton}
            onPress={() => setIsNeutered(true)}
          >
            <Text style={isNeutered ? appStyles.textPurpleButton : appStyles.textBlackButton}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={!isNeutered ? appStyles.activeButton : appStyles.lightPurpleButton}
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
