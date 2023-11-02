


// PROBABLY NOT USING THIS ANYMORE






import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import Header from '../components/Header';
import { useRoute } from '@react-navigation/core';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../styles/messageScreenStyles';
import useAuth from '../hooks/useAuth';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons/faPaperPlane';

const MessageScreen = () => {
  const { user } = useAuth();

  const { params } = useRoute();
  const { profile } = params;
  const profileName = profile.firstName

  const [input, setInput] = useState('');

  const sendMessage = () => {};


 


  return (
    <SafeAreaView style={styles.flexStart}> 
      <Header title={profileName} callEnabled/>

      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={10}
      >
      
      <View style={styles.row}>
        <TextInput style={styles.input}
        placeholder='Type your message...'
        onChangeText={setInput}
        onSubmitEditing={sendMessage}
        value={input}
        />
        <TouchableOpacity>
        <FontAwesomeIcon icon={faPaperPlane} style={{color: "rgba(52, 52, 52, 0.9)", paddingRight: 20}} size={20} />
        </TouchableOpacity>
      </View>

    </KeyboardAvoidingView>

    </SafeAreaView>

  )
};

export default MessageScreen