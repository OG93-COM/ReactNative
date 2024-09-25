import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LittleLemonHeader from "./components/LittleLemonHeader";
import LittleLemonFooter from "./components/LittleLemonFooter";
import WelcomeScreen from "./WelcomeScreen";
import Login from "./Login";

export default function App() {
  const Stack = createNativeStackNavigator();
  const LogoHeaderIcon = () => (
    <Image
      source={require("./assets/logo.png")}
      resizeMode="contain"
      style={styles.logo}
      accessible={true}
      accessiblityLabel="Logo of Little Lemon"
    />
  );
  return (
    <>
      <LittleLemonHeader />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerStyle: { backgroundColor: "#333329" },
            headerTintColor: "#FFFFFF",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 15,
            },
          }}
        >
          <Stack.Screen
            options={{
              title: "Home",
              headerTitle: (props) => <LogoHeaderIcon {...props} />,
            }}
            name="Welcome"
            component={WelcomeScreen}
          />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
      <LittleLemonFooter />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
  },
  footerContainer: { backgroundColor: "#333333" },
  logo: {
    height: 50,
    width: 50,
    alignSelf: "center",
  },
});
