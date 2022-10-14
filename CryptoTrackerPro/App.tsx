/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React  from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/HomeScreen';


const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <><Home/></>
  );
};

export default App;
