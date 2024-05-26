import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function App() {
  return (
    <View style = {styles.container}>
      <Text style = {styles.text}>
        My name is <Text style = {styles.boldText}>Donetta</Text>
      </Text>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColour: '#FFFDD0',
    alignItems: 'center',
    justifyContent: 'center',

  },
  text: {
    fontSize: 24,
  },
  boldText: {
    fontWeight: 'bold',
  },
});