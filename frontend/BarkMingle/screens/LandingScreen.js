import { useNavigation } from "@react-navigation/core";
import React, { useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../styles/landingStyles.js";
import appStyles from "../styles/appStyles.js";
import useAuth from "../hooks/useAuth.js";
import HomeSvgComponent from "../svg-images/HomeSvgComponent.js";
import HomeBlobSvgComponent from "../svg-images/HomeBlobSvgComponent.js";
import PurpleBGPatternSvgComponent from "../svg-images/PurpleBGPatternSvgComponent.js";
import { useTypingText } from "../hooks/useTypingText.js";

const LandingScreen = () => {
  const { user, setUser } = useAuth();

  // Clear user after sign-out
  useEffect(() => {
    setUser("");
  }, []);

  const navigation = useNavigation();

  // useTypingText params: useTypingText(words, keySpeed, maxPauseAmount);
  const { word } = useTypingText(
    [
      "find new connections",
      "go on fun adventures",
      "foster new friendships",
      "share smiles & laughter",
      "organize playdates",
      "make new memories",
    ],
    60,
    30
  );

  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <Text style={styles.textLogo}>
          <Text style={styles.textLogoPurple}>Bark </Text>
          <Text style={styles.textLogoBlack}>Mingle</Text>
        </Text>
        <HomeSvgComponent style={styles.image} />
        <HomeBlobSvgComponent style={styles.blob} />
      </View>
      <View style={styles.textContainer}>
        <View style={styles.textDescription}>
          <Text style={styles.landingDescription}>
            {`Creating a community for dogs and owners to \n`}{" "}
            <Text style={{ color: "#1E1E1E" }}>{word}</Text>
          </Text>
          <TouchableOpacity
            style={styles.getStartedButton}
            onPress={() => navigation.navigate("SignUp")}
          >
            <Text style={styles.textGetStarted}> Get Started </Text>
          </TouchableOpacity>

          <View style={styles.textAlignView}>
            <Text style={appStyles.textWhite}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
              <Text style={appStyles.textSignIn}> Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
        <PurpleBGPatternSvgComponent style={styles.background} />
      </View>
    </View>
  );
};

export default LandingScreen;
