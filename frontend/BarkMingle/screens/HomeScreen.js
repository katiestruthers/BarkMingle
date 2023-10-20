import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = () => {

  const navigation = useNavigation();

  return (
    <View> 
      <Text>I'm the HomeScreen</Text>
      <Button title="Start Chatting" onPress={() => navigation.navigate("Chat")}/>
    </View>
  )
};

export default HomeScreen