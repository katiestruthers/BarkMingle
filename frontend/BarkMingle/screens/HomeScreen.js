import { useNavigation } from '@react-navigation/core';
import React, { useRef } from 'react';
import {View, Text, ImageBackground, TouchableOpacity, Image} from 'react-native'; // can also use SafeAreaView from reg react-native if it looks better?
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from "../styles/homeStyles.js" 
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { faDog } from '@fortawesome/free-solid-svg-icons/faDog';
import { faPaw } from '@fortawesome/free-solid-svg-icons/faPaw';
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';
import { faHeart } from '@fortawesome/free-solid-svg-icons/faHeart';
import Swiper from "react-native-deck-swiper";


const dummyData = [{
  id: 1,
  firstName: "Fido",
  avatar: "https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2020-04/cb.jpg?itok=zzuVtGPr",
  bio: "BIO: Lorem ipsum dolor sit amet, consectetur adipiscing elit. In purus mi, rhoncus sit amet ante eget, sagittis lobortis augue. Sed bibendum risus in ex faucibus hendrerit. Curabitur ut posuere neque, nec suscipit odio. Praesent dapibus interdum nisl id tempus. Nullam blandit commodo dui, ut maximus felis tempus eu. Ut sodales. "
},
  {id: 2,
  firstName: "Rover",
  avatar: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRvZyUyMGJyZWVkc3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
  bio: "BIO: Lorem ipsum dolor sit amet, consectetur adipiscing elit. In purus mi, rhoncus sit amet ante eget, sagittis lobortis augue. Sed bibendum risus in ex faucibus hendrerit. Curabitur ut posuere neque, nec suscipit odio. Praesent dapibus interdum nisl id tempus. Nullam blandit commodo dui, ut maximus felis tempus eu. Ut sodales. "
},
{id: 3,
firstName: "Rex",
avatar: "https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
bio: "BIO: Lorem ipsum dolor sit amet, consectetur adipiscing elit. In purus mi, rhoncus sit amet ante eget, sagittis lobortis augue. Sed bibendum risus in ex faucibus hendrerit. Curabitur ut posuere neque, nec suscipit odio. Praesent dapibus interdum nisl id tempus. Nullam blandit commodo dui, ut maximus felis tempus eu. Ut sodales. "
},
];


const HomeScreen = () => {

  const navigation = useNavigation();
  const swipeRef = useRef(null);

  return (
    <SafeAreaView style={styles.flex}> 
      
      <View style={styles.navBar}>
        <TouchableOpacity  onPress={() => navigation.navigate("Chat")}>
          <FontAwesomeIcon icon={ faPaw } size={50} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <FontAwesomeIcon icon={ faDog } size={50}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("UserProfile")}>
          <FontAwesomeIcon icon={ faUser } size={50}/>
        </TouchableOpacity>
      </View>

      <ImageBackground 
        source={require('../assets/pale.jpg')}
        style={styles.background2}>

        <View style={styles.flex}>
          <Swiper 
            ref={swipeRef}
            containerStyle={ {backgroundColor: "transparent"} }
            cards={dummyData} 
            stackSize={5}
            cardIndex={0}
            animateCardOpacity
            verticalSwipe={false}
            
            onSwipedLeft={() => {
              console.log("PASS")
            }}

            onSwipedRight={() => {
              console.log("MATCH")
            }}

            overlayLabels={{
              left: {
                title: "Pass",
                style: {
                  label: {
                   textAlign: "right",
                    color: "#f83207",
                  },
                },
              },
              right: {
                title: "Match",
                style: {
                  label: {
                    textAlign: "left",
                    color: "#65d926"
                  },
                },
              },
            }}
            renderCard={(card) => (
              <View style={styles.cards} key={card.id} >
                <Image
                  style={styles.cardImage}
                  resizeMode="cover"
                  source={{ uri: card.avatar }}
                />
                <View>
                  <View >
                  <Text>{card.firstName}</Text>
                  <Text>{card.bio}</Text>
                  </View>
                </View>

              </View>
            )}/>
        </View>

        <View style={styles.buttons}>
          <TouchableOpacity 
          onPress={() => swipeRef.current.swipeLeft()}
          >
            <FontAwesomeIcon icon={faXmark} style={{color: "#f83207",}} size={50} />
          </TouchableOpacity>

          <TouchableOpacity
          onPress={() => swipeRef.current.swipeRight()}
          >
          <FontAwesomeIcon icon={faHeart} size={50} style={{color: "#65d926",}} />
          </TouchableOpacity>
        </View>
      
      </ImageBackground>
      
    </SafeAreaView>
  )
};

export default HomeScreen