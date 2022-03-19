import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import {Svg} from 'react-native-svg';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SVGLogo  from "./assets/logo"
import { TextInput } from 'react-native-web';
import Help from './components/help';
import Home from './components/Home';
import Search from './components/Search';
import SignOfTheDay from './components/signOfTheDay';

const Loading = () => {

  return (
      <>
      <View >
      {/* NOTE: issue with loading icon */}
      <div data-icon="ei-spinner" data-size="s"></div>
      <Text style={styles.loadingText}>Loading Results...</Text>
    </View>
    </>
  )
}

// const TopTab = createMaterialTopTabNavigator();

const BottomTab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <>
    {/* <NavigationContainer>
      <TopTab.Navigator>
        <TopTab.Screen 
        name='Home'
        component={Home} 
       options={{
          tabBarIcon: () => (
            <SVGLogo height={1000}            
          />
         ),          
          }}
      />
      </TopTab.Navigator>
    </NavigationContainer>  */}
    <NavigationContainer>
      <BottomTab.Navigator 
        // screenOptions={{
        //   initialRouteName:"Home",
        //   labeled:"false",
        // }}
          screenOptions={{
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
          }}
      >
        <BottomTab.Screen name="Home" component={Home} 
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home-search-outline" color={color} size={26} />
            ),
          }}
        />
        <BottomTab.Screen name="Loading" component={Loading} />
        <BottomTab.Screen name="Search" component={Search} 
        options={{
          tabBarLabel: 'Library',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="book-open-page-variant" color={color} size={26} />
          ),
        }}
        />
        <BottomTab.Screen name="Sign" component={SignOfTheDay} 
        options={{
          tabBarLabel: "Today's sign",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="calendar-heart" color={color} size={26} />
          ),
        }}/>
        <BottomTab.Screen name="Help" component={Help} options={{
          tabBarLabel: 'Help',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="help" color={color} size={26} />
          ),
        }}
      />
      </BottomTab.Navigator>
    </NavigationContainer>
    </>
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