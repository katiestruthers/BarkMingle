import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/headerStyles';
import { useNavigation } from '@react-navigation/core';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';

const Header = ( { title, callEnabled }) => {

  const navigation = useNavigation();

  return (
    <View style={styles.header}>  
      <View style={styles.title}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesomeIcon icon={faChevronLeft} size={30} />
        </TouchableOpacity>
        <Text style={styles.titleText}>{title}</Text>

      </View>
      <View>
      {callEnabled && (
        <TouchableOpacity >
          <FontAwesomeIcon icon={faPhone} size={30}/>
        </TouchableOpacity>
      )}

      </View>
    </View>

  )
};

export default Header;