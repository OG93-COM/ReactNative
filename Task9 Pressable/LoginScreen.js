import React, { useState } from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
} from "react-native";

export default function LoginScreen() {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
      {!isLogin && (
        <>
          <Text style={styles.regularText}>You Are Logged IN</Text>
          <Pressable
            style={styles.pressbleCenter}
            onPress={() => setIsLogin(true)}
          >
            <Text style={styles.buttonLogin}>Logout</Text>
          </Pressable>
        </>
      )}
      {isLogin && (
        <>
          <Text style={styles.regularText}>Login to continue </Text>
          <TextInput
            style={styles.inputBox}
            value={email}
            onChangeText={onChangeEmail}
            placeholder={"email"}
            keyboardType={"email-address"}
          />
          <TextInput
            style={styles.inputBox}
            value={password}
            onChangeText={onChangePassword}
            placeholder={"password"}
            keyboardType={"default"}
            secureTextEntry={true}
          />
          <Pressable
            style={styles.pressbleCenter}
            onPress={() => setIsLogin(false)}
          >
            <Text style={styles.buttonLogin}>Login</Text>
          </Pressable>
        </>
      )}
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
  inputBox: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "EDEFEE",
    backgroundColor: "#EDEFEE",
  },
  buttonLogin: {
    backgroundColor: "#EE9972",
    color: "#333",
    fontSize: 26,
    fontWeight: "bold",
    padding: 10,
    marginVertical: 8,
    margin: 0,
    borderColor: "#EDEFEE",
    borderWidth: 2,
    borderRadius: 22,
    textAlign: "center",
    width: 200,
  },
  pressbleCenter: {
    alignItems: "center",
  },
});
