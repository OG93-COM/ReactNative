import * as React from "react";
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
} from "react-native";

export default function WelcomeScreen() {
  return (
    <ScrollView indicatorStyle="white" style={styles.container}>
      <View style={styles.logoHeader}>
        <Image
          source={require("./assets/logo.png")}
          resizeMode="cover"
          style={styles.logo}
          accessible={true}
          accessiblityLabel="Logo of Little Lemon"
        />
        <Text style={styles.headerText}>Little Lemon</Text>
      </View>
      <ImageBackground source={require("./assets/background.jpg")} resizeMode="cover">
        <Text style={styles.regularText}>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. We would
          love to hear more about your experience with us!
        </Text>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  logoHeader: {
    flexDirection: "row",
    justifyContent: "center",
    margin: 10,
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 20,
    borderRadius: 10,
  },
});
