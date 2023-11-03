import {
  View,
  Text,
  Image,
} from "react-native";
import appStyles from "../styles/appStyles";
import NoProfilesBlobSvg from "../svg-images/NoProfilesBlobSvg";

const NoNewProfiles = () => {
  return (
    <View
          style={appStyles.noProfilesView}
        >
          <Text style={appStyles.textPurple}>
            Sorry, there are no new profiles!
          </Text>
          <Image
            source={require("../assets/dog-waiting.gif")}
            width={50}
            height={50}
            style={{ bottom: 5}}
          />
          <NoProfilesBlobSvg
            style={{ zIndex: -1, position: "absolute", left: 38, top: 30 }}
          />
        </View>
  )
}

export default NoNewProfiles;