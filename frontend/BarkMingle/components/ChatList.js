
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import useAuth from '../hooks/useAuth.js';
import ChatRow from './ChatRow.js';
import styles from '../styles/chatListStyles.js';

//DATA
import { usersMatchArray, filteredProfiles } from '../screens/HomeScreen.js';
import {dogProfiles, getUserProfile, matchedProfiles } from "../dummyData/dummyData.js"


const ChatList = () => {

  const { user } = useAuth();

  /*
  const [matches, setMatches] = useState([]);

  useEffect(() => 
    onSnapshot(
      query(
        collection(db, 'matches'), 
        where('usersMatched', 'array-contains', user)
      ), 
      (snapshot) =>  setMatches(
        snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
    )
  );
, [user])

   */


    // filter profiles to only matched profiles
    const matches = matchedProfiles(usersMatchArray, filteredProfiles)
  

  return (
    matches.length > 0 ? (
      <FlatList 
        contentContainerStyle={styles.list}
        data={matches}
        keyExtractor={item => item.id}
        renderItem={({item}) => <ChatRow matchDetails={item} dogName={item.firstName} avatar={item.avatar} />}
      
      /> ) :
      (<View>
        <Text>No matches yet...</Text>
      </View>)

    )
  
};

export default ChatList