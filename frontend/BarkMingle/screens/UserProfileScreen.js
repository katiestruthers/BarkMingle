import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View, Text, Button } from 'react-native';

const UserProfileScreen = () => {

  const navigation = useNavigation();

  return (
    <View> 
      <Text>I'm the UserProfileScreen</Text>
      <Button title="Head Home" onPress={() => navigation.navigate("Home")}/>
    </View>
  )
};

export default UserProfileScreen