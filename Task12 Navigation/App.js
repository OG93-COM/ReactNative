import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LittleLemonHeader from "./components/LittleLemonHeader";
import LittleLemonFooter from "./components/LittleLemonFooter";
import WelcomeScreen from "./WelcomeScreen";
import Login from "./Login";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
    <LittleLemonHeader/>
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerStyle:{backgroundColor:"#EEEEEE"}}}
      >
        <Stack.Screen options={{title:'Home'}} name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
    <LittleLemonFooter/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
  },
  footerContainer: { backgroundColor: "#333333" },
});
