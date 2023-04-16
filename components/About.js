import { StatusBar } from 'expo-status-bar';
import React, { Commponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>A propos</Text>
      <Text>Ceci est une application de messagerie instantanée</Text>
    </View>
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
