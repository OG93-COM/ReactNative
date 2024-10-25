import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

import LittleLemonHeader from "./components/LittleLemonHeader";
import Onboarding from "./Onboarding";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "./Profile";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' >
          <Stack.Screen name="Home" component={Onboarding} options={{ title: 'Homepage' }}/>
          <Stack.Screen name="profile" component={Profile}/>
        </Stack.Navigator>
      </NavigationContainer>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f4",
  },
});

// We Need to install this :
// npm install @react-navigation/native
// npx Expo install react-native-screens react-native-safe-area-context
// npm install @react-navigation/native-stack
