import { ScrollView, View, Text, StyleSheet } from 'react-native';
import * as React from "react";

export default function SplashScreen() {

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerWrapper}>

      </View>
      <Text style={styles.regularText}>
        Hello, Welcome To Little Lemon 👋
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cbd2da',

  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:"center",
    margin: 10,
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginTop: 30,
    marginBottom: 50,
    color: '#334753',
    textAlign: 'center',
    fontWeight:"bold",
  },
});
