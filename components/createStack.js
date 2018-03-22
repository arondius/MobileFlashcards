import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const createStack = () => (
  <View style={styles.container}>
    <Text>Create Stack</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default createStack;

