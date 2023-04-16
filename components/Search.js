import { StatusBar } from 'expo-status-bar';
import React, { Commponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import About from './About';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Search from './Search';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Tchat from './Tchat';

const Tab = createBottomTabNavigator();

export default function Home() {
  return (
    <NavigationContainer >
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerStyle: {
        backgroundColor: 'rgba(34,36,40,1)', // la couleur que vous souhaitez utiliser
        },
        headerTitleStyle: {
            color: 'white', // <--- Change the text color here
        },
        tabBarStyle: {
        backgroundColor: 'rgba(34,36,40,1)',
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'About') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Home') {
            iconName = focused ? 'ios-list' : 'ios-list-outline';
          } else if (route.name === 'Tchat') {
            iconName = focused ? 'ios-list' : 'ios-list-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >

      <Tab.Screen name="About" component={About} />
      <Tab.Screen name="Tchat" component={Tchat} />
    </Tab.Navigator>
  </NavigationContainer>
  );
}
