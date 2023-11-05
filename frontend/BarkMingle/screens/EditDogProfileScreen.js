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
import FullScreenBgSvg from "../svg-images/FullScreenBgSvg.js";
import Axios from "axios";

// Read more here: https://www.npmjs.com/package/react-native-dropdown-select-list
import { SelectList } from "react-native-dropdown-select-list";

const CreateDogProfileScreen = () => {
  const { token, user, setUser } = useAuth();
  const navigation = useNavigation();

  const headers = {
    authorization: `Bearer ${token}`,
  };

  const [name, setName] = useState(user.dog_name);
  const [breed, setBreed] = useState(user.breed);
  const [gender, setGender] = useState(user.dog_gender);
  const [age, setAge] = useState(user.dog_age);
  const [size, setSize] = useState(user.dog_size);
  const [isNeutered, setIsNeutered] = useState(user.is_neutered);

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
    Axios.post("http://localhost:8080/api/dogs", {
      name,
      breed,
      gender,
      age,
      size,
      is_neutered: isNeutered
    }, { headers }).then(res => {
      setUser(res.data.user);
      navigation.navigate("UserProfile"); // Navigato to the "UserProfile" screen on success
    }).catch(err => console.log(err));
  };

   // Helper function for displaying a dog's age
   const dogAgePlaceholder = (age) => {
    switch (age) {
      case 0:
        return "Less than a year";
      case 14:
        return "13+";
      default:
        return `${age}`;
    }
  };

  return (
    <KeyboardAvoidingView
      style={appStyles.containerWhite}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <FullScreenBgSvg style={appStyles.backgroundFull} />
      <TouchableOpacity onPress={() => navigation.navigate("UserProfile")}>
        <FontAwesomeIcon
          icon={faArrowLeft}
          size={50}
          style={appStyles.backIconPurple}
        />
      </TouchableOpacity>
      <View>
        <Text style={appStyles.textHeaderPurple}>
          {`Edit ${user.dog_name}'s profile details`}
        </Text>
      </View>

      <View style={appStyles.contentContainer}>
        <Text style={appStyles.textSmallHeaderBlack}>Dog Name *</Text>
        <View style={styles.inputView}>
          <TextInput
            style={appStyles.textInput}
            onChangeText={(text)=>setName(text)}
            value={name}
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
            placeholder={breed}
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
            placeholder={gender}
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
            placeholder={dogAgePlaceholder(age)}
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
            placeholder={size}
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
        <TouchableOpacity
          onPress={onSubmit}
          style={appStyles.purpleButton}
        >
          <Text style={appStyles.textWhite}> Save Changes </Text>
        </TouchableOpacity>
      </View>

    </KeyboardAvoidingView>
  );
};

export default CreateDogProfileScreen;
