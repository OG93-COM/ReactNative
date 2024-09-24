import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import LittleLemonHeader from "./components/LittleLemonHeader";
import LittleLemonFooter from "./components/LittleLemonFooter";
import WelcomeScreen from "./WelcomeScreen";
import Setting from "./Setting";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Ionicons} from '@expo/vector-icons'

export default function App() {
  const Tab = createBottomTabNavigator();

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
        <Tab.Navigator screenOptions={({route}) => ({
          tabBarIcon:({focused, color, size})  => {
            let iconName;
            if(route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Setting') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor:"tomato",
          tabBarInactiveTintColor:"gray"
        })}>
          <Tab.Screen name="Home" component={WelcomeScreen}/>
          <Tab.Screen name="Setting" component={Setting}/>
        </Tab.Navigator>
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
