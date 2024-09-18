import React, { useState } from "react";
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  TextInput,
  Pressable,
  Image,
} from "react-native";

export default function LoginScreen() {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [validationMessage, setValidationMessage] = useState("");

  const handleLogin = () => {
    if (email !== "" && password !==""){
      setIsLogin(false)
      setValidationMessage("")
    }else {
      setValidationMessage("Please Enter you Email and Password")
    }
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
      {!isLogin && (
        <>
        <View style={styles.centerItem}>
          <Image
          style={styles.logo}
          source={require("./assets/logo.png")}
          resizeMode="contain"
          accessible={true}
          accessibilityLabel="Logo Little Lemon Restaurant"
          />
        </View>
          <Text style={styles.regularText}>You Are Logged IN as {email}</Text>
          <Pressable
            style={styles.centerItem}
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
            onPress={handleLogin}
          >
            <Text style={styles.buttonLogin}>Login</Text>
          </Pressable>
          <Text style={styles.validation}>{validationMessage}</Text>
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
  centerItem: {
    alignItems: "center",
  },
  validation: {
    fontSize: 12,
    padding: 5,
    marginVertical: 2,
    color: "red",
    textAlign: "center",
  },
  logo: {
    height: 100,
    width: 310,
    alignItems:"center"
 },
});
