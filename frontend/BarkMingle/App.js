import { StyleSheet, Text, View } from 'react-native';
import StackNavigator from './StackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './hooks/useAuth';
import { useFonts, Baloo2_400Regular, Baloo2_500Medium, Baloo2_600SemiBold, Baloo2_800ExtraBold } from '@expo-google-fonts/baloo-2';

export default function App() {

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
    <NavigationContainer>
      <AuthProvider>
        <StackNavigator />
      </AuthProvider>
    </NavigationContainer>
    
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


