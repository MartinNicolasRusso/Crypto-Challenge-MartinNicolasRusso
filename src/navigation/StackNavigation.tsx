import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/HomeScreen';
import AddNewCrypto from '../screens/AddCryptoScreen';
import theme from '../utils/themes';
import Profile from '../assets/Profile.jpg';
import {Photo} from '../components/header/styles';

const Stack = createNativeStackNavigator();

const StackNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: `${theme.colors.blue}`,
        },
        headerTintColor: `${theme.colors.white}`,
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 25,
        },
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'CryptoTracker Pro',
          headerRight: () => <Photo source={Profile} />,
        }}
      />
      <Stack.Screen
        name="AddCrypto"
        options={{headerShown: false}}
        component={AddNewCrypto}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default StackNavigation;
