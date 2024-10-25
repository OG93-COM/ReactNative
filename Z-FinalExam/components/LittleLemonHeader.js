import * as React from 'react';
import { Image } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';

export default function LittleLemonHeader() {
  return (
    <View style={styles.container}>
      <Image
          style={styles.logo}
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
    backgroundColor: '#dee3ea',
  },
  headerText: {
    paddingTop: 40,
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
  logo: {
    width: 200,
    height: 80,
    margin: 10,

  },
});
