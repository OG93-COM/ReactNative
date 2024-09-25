import * as React from "react";
import { ScrollView, Text, StyleSheet, Image } from "react-native";

export default function WelcomeScreen({navigation}) {
  return (
    <ScrollView keyboardDismissMode="on-drag" style={styles.container}>
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
      <Image
        source={require("./assets/logo.png")}
        resizeMode="cover"
        style={styles.logo}
        accessible={true}
        accessiblityLabel="Logo of Little Lemon"
      />
      <Text style={styles.regularText}>
        Hi, This my first try for the Navigation On React Native
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#40534C",
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: "#EDEFEE",
    textAlign: "center",
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
  },
  validation: {
    fontSize: 12,
    padding: 5,
    marginVertical: 2,
    color: "red",
    textAlign: "center",
  },
  input: {
    backgroundColor: "grey",
    color: "white",
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginHorizontal: 5,
    marginBottom: 20,
    borderRadius: 5,
    borderColor: "#EDEFEE",
    borderWidth: 1,
  },
  logo: {
    width: 100,
    height: 100,
    marginHorizontal: 150,
    borderRadius: 10,
  },

});
