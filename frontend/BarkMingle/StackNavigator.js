import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import ChatScreen from './screens/ChatScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Chat" component={ChatScreen} />
    </Stack.Navigator>

  )
};

export default StackNavigator



// import React from 'react';
// import { View, Text } from 'react-native';

// const StackNavigator = () => {
//   return (
//     <View> 
//       <Text></Text>
//     </View>

//   )
// };

// export default StackNavigator