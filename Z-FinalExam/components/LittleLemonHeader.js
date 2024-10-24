import * as React from 'react';
import { Image } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';

export default function LittleLemonHeader() {
  return (
    <View style={styles.container}>
      <Image
          style={styles.image}
          source={require('../img/Logo.png')}
          resizeMode="cover"
          accessible={true}
          accessibilityLabel={'Little Lemon Logo'}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    backgroundColor: '#f5f5f2',
  },
  headerText: {
    paddingTop: 40,
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
  image: {
    width: 400,
    height: 80,
    marginTop: 20,

  },
});
