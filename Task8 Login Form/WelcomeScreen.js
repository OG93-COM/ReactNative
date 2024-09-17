import * as React from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Button,
  Alert,
} from "react-native";

export default function WelcomeScreen() {
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [messageValidation,onChangeMessageValidation] = React.useState("")

  const handleLogin = ()=> {
    if(email !== "" && password !==""){
      Alert.alert("✅ Welcome");
      onChangeMessageValidation("")
    } else {
      onChangeMessageValidation("Please add your information to login")
    }
  }
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView keyboardDismissMode="on-drag">
        <Text style={styles.headerText}>Welcome to Little Lemon</Text>
        <Text style={styles.regularText}>Login to continue</Text>
        <TextInput
          style={styles.input}
          keyboardType={"email-address"}
          placeholder={"Please enter your Email Here"}
          value={email}
          onChangeText={onChangeEmail}
          maxLength={50}
        />
        <TextInput
          style={styles.input}
          keyboardType={"default"}
          placeholder={"Please enter your Password"}
          value={password}
          onChangeText={onChangePassword}
          maxLength={30}
          secureTextEntry={true}
        />
        {messageValidation !== "" && (
          <Text style={styles.validation}>{messageValidation}</Text>
        )}
        <Button
          onPress={handleLogin}
          title="Login"
          color="#EE9972"
          accessibilityLabel="Learn more about this purple button"
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.85,
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
});
