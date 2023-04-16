import { StatusBar } from 'expo-status-bar';
import React, { Commponent } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import About from './About';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Search from './Search';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Tchat from './Tchat';
import App from '../App';

const Tab = createBottomTabNavigator();

export default function Login() {
  return (
    <NavigationContainer>
    <View style={styles.container}>
      <Text style={styles.title}>S'inscrire</Text>
      <Button title="S'inscire"></Button>
    </View>
    <Tab.Screen name="Home" component={App} />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20
  },
  title: {
    fontSize: 22,
    marginBottom: 20
  }
});
