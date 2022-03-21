import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './Home';
import Search from './Search';
import SignOfTheDay from './signOfTheDay';
import HelpScreen from './help';

const BottomTab = createMaterialBottomTabNavigator();

function HomeTabs() {
    return (
      <BottomTab.Navigator 
            screenOptions={{
              headerStyle: {
                backgroundColor: '#f4511e',
                labeled:"false",
              },
              headerShown: false
            }}
        >
          <BottomTab.Screen name="Home" component={Home} 
            options={{
              tabBarLabel: null,
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home-search-outline" color={color} size={26} />
              ),
            }}
          />
          {/* <BottomTab.Screen name="Loading" component={loading} /> */}
          <BottomTab.Screen name="Search" component={Search} 
          options={{
            tabBarLabel: null,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="book-open-page-variant" color={color} size={26} />
            ),
          }}
          />
          <BottomTab.Screen name="Sign" component={SignOfTheDay} 
          options={{
            tabBarLabel: null,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="calendar-heart" color={color} size={26} />
            ),
          }}/>
          <BottomTab.Screen name="Help" component={HelpScreen} options={{
            tabBarLabel: null,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="help" color={color} size={26} />
            ),
          }}
        />   
        </BottomTab.Navigator>
    )
  }
  
export default HomeTabs