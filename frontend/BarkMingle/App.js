import { StyleSheet, Text, View } from 'react-native';
import StackNavigator from './StackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './hooks/useAuth';
import { AppProvider } from "./AppContext";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useFonts, Baloo2_400Regular, Baloo2_500Medium, Baloo2_600SemiBold, Baloo2_800ExtraBold } from '@expo-google-fonts/baloo-2';
import Axios from "axios";
import { SafeAreaView } from 'react-native-safe-area-context';


export default function App() {
  // Sample connection
  Axios({
    method: "GET",
    url: "http://localhost:8080/api/data",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => {
    console.log(res.data.message);
  });

  let [fontsLoaded, fontError] = useFonts({
    Baloo2_400Regular,
    Baloo2_500Medium,
    Baloo2_600SemiBold,
    Baloo2_800ExtraBold
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }


  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AppProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <NavigationContainer>
           
              <AuthProvider>
                <StackNavigator />
              </AuthProvider>
            
          </NavigationContainer>
        </SafeAreaView>
      </AppProvider>
    </GestureHandlerRootView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


