import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, Text, Button } from "react-native";

// chat screen component

const ChatScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>I am the chat screen</Text>
      <Button title="Head Home" onPress={() => navigation.navigate("Home")}/>
    </View>
  )
}

export default ChatScreen