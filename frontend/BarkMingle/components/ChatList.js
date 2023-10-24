
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import useAuth from '../hooks/useAuth.js';
import ChatRow from './ChatRow.js';
import styles from '../styles/chatListStyles.js';

//DATA
import { userMatchDetailsArray, usersMatchArray, swipedUser, appData } from '../screens/HomeScreen.js';
import {dogProfiles, getUserProfile, matchedProfiles } from "../dummyData/dummyData.js"


const ChatList = () => {

  const {userProfile, filteredProfiles} = appData;  
  const { user } = useAuth();
  const matches = userMatchDetailsArray
  

  return (
    matches.length > 0 ? (
      <FlatList 
        contentContainerStyle={styles.list}
        data={matches}
        keyExtractor={item => item.id}
        renderItem={({item}) => <ChatRow matchDetails={item} dogName={item.firstName} avatar={item.avatar} humanName={item.humanName}/>}
      
      /> ) :
      (<View>
        <Text>No matches yet...</Text>
      </View>)

    )
  
};

export default ChatList