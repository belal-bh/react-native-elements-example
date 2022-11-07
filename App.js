import React from 'react';
import {ThemeProvider} from '@rneui/themed';
import HomeScreen from './src/screens/HomeScreen';
import TypographyScreen from './src/screens/TypographyScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default App = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Typography" component={TypographyScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};
