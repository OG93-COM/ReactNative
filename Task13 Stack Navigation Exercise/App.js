import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeScreen from './WelcomeScreen';
import LoginScreen from './LoginScreen';


export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <>
        <View style={styles.container}>
          <LittleLemonHeader />
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Login'  screenOptions={{headerStyle:{backgroundColor:"grey"}}} >
            <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login Page' }}/>
            <Stack.Screen name="Home" component={WelcomeScreen} options={{ title: 'Home Page' }}/>
          </Stack.Navigator>

        </NavigationContainer>
        </View>
        <View style={styles.footerContainer}>
          <LittleLemonFooter />
        </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: { backgroundColor: '#333333' },
});   

