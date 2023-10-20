import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity, Image} from 'react-native'; // can also use SafeAreaView from reg react-native if it looks better?
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from "../styles/homeStyles.js" 
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { faDog } from '@fortawesome/free-solid-svg-icons/faDog';
import { faPaw } from '@fortawesome/free-solid-svg-icons/faPaw';
import Swiper from "react-native-deck-swiper";


const dummyData = [{
  id: 1,
  firstName: "Fido",
  avatar: "https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2020-04/cb.jpg?itok=zzuVtGPr",
  bio: "BIO: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fermentum eros mi, at placerat tortor tempor nec. Suspendisse tincidunt pulvinar metus, in finibus risus consectetur quis. Quisque ac lacus non ex sollicitudin dapibus vitae cursus orci. Vivamus finibus tristique eros non feugiat. Suspendisse nec arcu aliquam, interdum massa at, ornare enim. Nullam varius malesuada lacus, porta aliquam nisl tempus in. Fusce tempor odio tortor, vel dictum nulla molestie a. Nulla ac molestie purus. Nulla dolor metus, hendrerit id sollicitudin non, volutpat a nunc. Pellentesque pharetra, velit quis bibendum condimentum, urna odio sollicitudin turpis, in mattis odio elit nec mauris. Fusce."
},
  {id: 2,
  firstName: "Rover",
  avatar: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRvZyUyMGJyZWVkc3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
  bio: "BIO: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu suscipit est, eu sollicitudin elit. Ut blandit tortor eget quam eleifend, id semper sapien porta. Etiam eu justo erat. Nam venenatis sollicitudin sollicitudin. Suspendisse pulvinar sagittis dolor, non venenatis lacus tempor non. Proin vitae dui ligula. In volutpat, dolor in tincidunt mattis, libero augue pellentesque ante, tincidunt sagittis turpis nunc sed lectus. Integer nulla sem, auctor eget magna quis, vehicula tempor magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque eget dolor sed sapien tincidunt. "
},
{id: 3,
firstName: "Rex",
avatar: "https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
bio: "BIO: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc finibus arcu elementum ligula viverra mattis. Duis bibendum suscipit sem. Mauris venenatis lacus congue ornare tincidunt. Ut quis eros aliquam, faucibus magna at, vulputate sapien. In malesuada, nisl id cursus fringilla, odio nunc accumsan turpis, a volutpat elit eros nec nisi. Sed sollicitudin lectus quis elit auctor, quis ornare nisl pellentesque. Donec risus leo, dignissim at iaculis sed, aliquam eu lorem. In hac habitasse platea dictumst. Pellentesque accumsan gravida quam ac maximus. Duis fringilla metus id dapibus vulputate. Donec tincidunt mauris at lectus rhoncus, nec ultrices. "
},
];


const HomeScreen = () => {

  const navigation = useNavigation();

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
                title: "Nope",
                style: {
                  label: {
                   textAlign: "right",
                    color: "#d99504",
                  },
                },
              },
              right: {
                title: "Match",
                style: {
                  label: {
                    textAlign: "left",
                    color: "#0a96d1"
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
};

export default HomeScreen