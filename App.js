import { StyleSheet  } from 'react-native';
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Svg} from 'react-native-svg';
// import SVGLogo  from "./assets/logo"
import HomeStackScreen from './components/navigation';

export default function App() {
  return (
    <HomeStackScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }, 
  home: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: "#234d79"
  },
  settings: {
    display: "flex", 
    alignItems: 'center',  
    flexDirection: 'column',
    justifyContent: "space-around",
    backgroundColor: "#74b6c9",
  },
});

// dark blue: #234d79
// pink: #d56a66
// teal: #72beaf
// green: #83bf86
// blue: #74b6c9
// grey: #b3cfde
// white: #e9f2f7