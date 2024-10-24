import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

import LittleLemonHeader from "./components/LittleLemonHeader";
import WelcomeScreen from "./WelcomeScreen";

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <>
      
        <View style={styles.container}>
          <LittleLemonHeader />
          <WelcomeScreen/>
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
