import { useNavigation } from "@react-navigation/core";
import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../styles/userProfileStyles.js";
import appStyles from "../styles/appStyles.js";
import NavBar from "../components/NavBar.js";
import { dogProfiles, getUserProfile } from "../dummyData/dummyData.js";
import useAuth from "../hooks/useAuth.js";
import { useChatContext } from "stream-chat-react-native-core";
import FullScreenBgSvg from "../svg-images/FullScreenBgSvg.js";
import { StreamChat } from "stream-chat";
import { CHAT_API_KEY } from "@env";

const UserProfileScreen = () => {
  const client = StreamChat.getInstance(CHAT_API_KEY);

  const disconnectUser = async () => {
    await client.disconnectUser();
  };

  const navigation = useNavigation();
  const { user, setUser, token } = useAuth();

  const EditUserProfile = () => {
    navigation.navigate("EditUserProfile", { user });
  };

  const signOut = () => {
    disconnectUser();
    navigation.navigate("GetStarted");
  };

  return (
    <View style={styles.flex}>
      <View style={styles.header}>
        <FullScreenBgSvg style={appStyles.backgroundHalf} />
        <Text style={styles.nameText}>
          {`${user.dog_name} & ${user.first_name}`}
        </Text>
      </View>

      <Image source={{ uri: user.dog_img }} style={styles.dogAvatar} />
      <Image source={{ uri: user.profile_img }} style={styles.avatar} />

      <View style={styles.textBox}>
        <Text style={styles.textBlack}>Your Bio</Text>
        <View style={styles.line} />
        <Text style={styles.textBio}>{`${user.bio}`}</Text>
      </View>

      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.button} onPress={EditUserProfile}>
          <Text style={styles.buttonText}> Edit Profile </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={EditUserProfile}>
          <Text style={styles.buttonText}>
            {" "}
            {`Edit ${user.dog_name}'s Profile`}{" "}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={signOut}>
          <Text style={styles.buttonText}> Sign Out </Text>
        </TouchableOpacity>
      </View>
      <NavBar />
    </View>
  );
};

export default UserProfileScreen;
