/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {type PropsWithChildren} from 'react';
import CryptoList from './src/containers/CryptoList';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Header from './src/components/header';
import Home from './src/screens/HomeScreen';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <><Home/></>
  );
};

export default App;
