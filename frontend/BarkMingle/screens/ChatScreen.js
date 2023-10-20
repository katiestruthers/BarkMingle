import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View, Text, Button } from 'react-native';

const ChatScreen = () => {

  const navigation = useNavigation();

  return (
    <View> 
      <Text>I'm the ChatScreen</Text>
      <Button title="Head Home" onPress={() => navigation.navigate("Home")}/>
    </View>
  )
};

export default ChatScreen