import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
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
import BonePatternSvg from "../svg-images/BonePatternSvg.js";
import StatusBarSvg1 from "../svg-images/StatusBarSvg1.js";
import Axios from "axios";
// https://www.npmjs.com/package/react-native-dropdown-select-list
import { SelectList } from "react-native-dropdown-select-list";

const CreateDogProfileScreen = () => {
  const { token, setToken } = useAuth();
  console.log("CreateDogProfileToken: ", token);
  const navigation = useNavigation();

  const headers = {
    authorization: `Bearer ${token}`,
  };

  const [name, setName] = useState("");
  const [breeds, setBreeds] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [size, setSize] = useState("");
  const [is_neutered, setIsNeutered] = useState("");

  const dataGender = [{ value: "male" }, { value: "female" }];

  const dataBreed = [
    { value: "Labrador Retriever" },
    { value: "German Shepherd" },
    { value: "Golden Retriever" },
    { value: "French Bulldog" },
    { value: "Bulldog" },
    { value: "Poodle" },
    { value: "Beagle" },
    { value: "Rottweiler" },
    { value: "German Shorthaired (Pointer)" },
    { value: "Pembroke Welsh Corgi" },
    { value: "Dachshund" },
    { value: "Australian Shepherd" },
    { value: "Siberian Husky" },
    { value: "Cavalier King Charles Spaniel" },
    { value: "Great Dane" },
    { value: "Miniature Schnauzer" },
    { value: "Doberman Pincher" },
    { value: "Shih Tzu" },
    { value: "Chihuahua" },
    { value: "English Cocker Spanieler" },
    { value: "Pug" },
    { value: "Sheltie" },
    { value: "Dalmation" },
    { value: "Basset Hound" },
    { value: "Border Collie" },
    { value: "St. Bernard" },
    { value: "Boston Terrier" },
    { value: "Alaskan Malamute" },
    { value: "Mixed-Breed" },
  ];

  const dataSize = [
    { value: "small" },
    { value: "medium" },
    { value: "large" },
  ];

  const onSubmit = () => {
    Axios.post(
      "http://localhost:8080/api/dogs/signup",
      {
        name,
        breeds,
        gender,
        age,
        size,
        is_neutered,
      },
      { headers }
    )
      .then((res) => {
        setToken(res.data.token);
        navigation.navigate("Traits"); // Navigato to the "Traits" screen on success
      })
      .catch((err) => console.log(err));
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <BonePatternSvg style={styles.backgroundTop} />
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
            onChangeText={(text) => setName(text)}
          />
        </View>

        <Text style={styles.textHeaderBlack}>Breed * </Text>
        <View style={styles.dropDownView1}>
          <SelectList
            data={dataBreed}
            setSelected={(val) => setBreeds(val)}
            fontFamily="Baloo2_400Regular"
            boxStyles={styles.dropDown}
            dropdownStyles={styles.dropDownScroll1}
          />
        </View>

        <Text style={styles.textHeaderBlack}>Gender * </Text>
        <View style={styles.dropDownView2}>
          <SelectList
            data={dataGender}
            setSelected={(val) => setGender(val)}
            fontFamily="Baloo2_400Regular"
            boxStyles={styles.dropDown}
            dropdownStyles={styles.dropDownScroll2}
            dropdownTextStyles={styles.text}
            search={false}
            maxHeight={200}
          />
        </View>

        <Text style={styles.textHeaderBlack}>Age * </Text>
        <View style={styles.inputView}>
          <TextInput
            style={appStyles.textInput}
            onChangeText={(text) => setAge(text)}
          />
        </View>

        <Text style={styles.textHeaderBlack}>Size * </Text>
        <View style={styles.dropDownView1}>
          <SelectList
            data={dataSize}
            setSelected={(val) => setSize(val)}
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
            style={appStyles.button}
            onPress={() => setIsNeutered("Yes")}
          >
            <Text style={appStyles.textBlackButton}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={appStyles.button}
            onPress={() => setIsNeutered("No")}
          >
            <Text style={appStyles.textBlackButton}>No</Text>
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
      <BonePatternSvg style={styles.backgroundBottom} />
    </KeyboardAvoidingView>
  );
};

export default CreateDogProfileScreen;
