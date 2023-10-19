import { useNavigation } from "@react-navigation/core";
import React from "react";
import { InteractionManager, View, Text, Button, ImageBackground, SafeAreaView, TouchableOpacity, Image } from "react-native";
import Swiper from "react-native-deck-swiper";
import styles from "../styles/loginStyles.js"
import { useTailwind }  from 'tailwind-rn';
import useAuth from "../hooks/useAuth.js";
import Footer from "../components/Footer.js";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { faDog } from '@fortawesome/free-solid-svg-icons/faDog';
import { faPaw } from '@fortawesome/free-solid-svg-icons/faPaw';

const dummyData = [{
  id: 1,
  firstName: "Fido",
  avatar: "https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2020-04/cb.jpg?itok=zzuVtGPr",
  bio: "BIO: words words words words words words words words words words words words words words words words words words "
},
  {id: 2,
  firstName: "Rover",
  avatar: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRvZyUyMGJyZWVkc3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
  bio: "BIO: words words words words words words words words words words words words words words words words words words "
},
{id: 3,
firstName: "Rex",
avatar: "https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
bio: "BIO: words words words words words words words words words words words words words words words words words words "
},
]

// home screen component

const HomeScreen = () => {

  // const tw = useTailwind();
  const navigation = useNavigation();
  const { user } = useAuth();

  return (
    <SafeAreaView style={styles.flex}>
      <View style={styles.header}>
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
        source={require('../assets/dogbones.jpg')}
        style={styles.background2}>
      
      

        <View style={styles.flex}>
          <Swiper 
            containerStyle={ {backgroundColor: "transparent"} }
            cards={dummyData} 
            stackSize={5}
            cardIndex={0}
            animateCardOpacity
            verticalSwipe={false}
            overlayLabels={{
              left: {
                title: "NOPE",
                style: {
                  label: {
                   textAlign: "right",
                    color: "red",
                  },
                },
              },
              right: {
                title: "MATCH",
                style: {
                  label: {
                    textAlign: "left",
                    color: "#4DED30"
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
      </ImageBackground>
          
    </SafeAreaView>
  )
}

export default HomeScreen