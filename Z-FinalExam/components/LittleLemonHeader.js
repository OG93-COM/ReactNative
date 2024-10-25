import * as React from 'react';
import { Image } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';

export default function LittleLemonHeader() {
  return (
    <View style={styles.container}>
      <Image
          style={styles.logo}
          source={require('../img/Logo.png')}
          resizeMode="stretch"
          accessible={true}
          accessibilityLabel={'Little Lemon Logo'}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.3,
    backgroundColor: '#dee3ea',
    flexDirection: "row",
    justifyContent:"center"
  },
  logo: {
    width: 250,
    height: 60,
    marginTop: 40,
  },
});
