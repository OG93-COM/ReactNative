import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container:{
    fontSize: 18,
    color: 'black',
    textAlign: 'center'
  }
})

export default function LittleLemonFooter() {
  return (
    <View
      style={{
        backgroundColor: '#F4CE14',
        marginBottom: 10,
      }}>
      <Text style={styles.container}>
        All rights reserved by Little Lemon, 2022{' '}
      </Text>
    </View>
  );
}
