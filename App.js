import { StatusBar } from 'expo-status-bar';
import React, { Commponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import About from './components/About';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Search from './components/Search';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Tchat from './components/Tchat';
import Login from './components/Login';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Login/>
  );
}
