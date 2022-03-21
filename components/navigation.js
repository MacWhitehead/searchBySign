import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import HelpScreen from './help';
import HomeTabs from './bottomNav';

const HelpStack = createStackNavigator();
const HelpStackScreen = ( navigation ) => (
    <HelpStack.Navigator
    options={{ headerShown: false }}>
        <HelpStack.Screen name="HelpScreen" component={HelpScreen} />
        <HelpStack.Screen name="SendUsYourSign" component={SendUsYourSign} />
    </HelpStack.Navigator>
)

const HomeStack = createStackNavigator();
const HomeStackScreen = () => (
    <NavigationContainer 
    options={{
        tabBarLabel: null,
        headerShown: false
      }}>
          <HomeStack.Navigator
          options={{ headerShown: false }}
          >
            <HomeStack.Screen name="HomeTabs" component={HomeTabs} />
            <HomeStack.Screen name="HelpStack" component={HelpStackScreen} />
          </HomeStack.Navigator>
    </NavigationContainer>
)

export default HomeStackScreen