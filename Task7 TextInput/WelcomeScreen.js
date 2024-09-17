import * as React from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

export default function WelcomeScreen() {
  const [firstName, onChangeFirstName] = React.useState("");
  const [lastName, onChangeLastName] = React.useState("");
  const [phoneNum, onChangePhoneNum] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [message, onChangeMessage] = React.useState("");
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView indicatorStyle="white" keyboardDismissMode="on-drag">
        <Text style={styles.headerText}>Welcome to Little Lemon</Text>
        <Text style={styles.regularText}>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. We would
          love to hear more about your experience with us!
        </Text>
        <TextInput
          style={styles.input}
          keyboardType={"default"}
          placeholder={"Please enter your First Name Here"}
          value={firstName}
          onChangeText={onChangeFirstName}
          maxLength={30}
        />
        <TextInput
          style={styles.input}
          keyboardType={"default"}
          placeholder={"Please enter your Last Name Here"}
          value={lastName}
          onChangeText={onChangeLastName}
          maxLength={30}
        />
        <TextInput
          style={styles.input}
          keyboardType={"phone-pad"}
          placeholder={"Please enter your Phone Number"}
          value={phoneNum}
          onChangeText={onChangePhoneNum}
          maxLength={30}
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
        <TextInput
          style={styles.inputMessage}
          keyboardType={"default"}
          placeholder={"Please enter Message Here"}
          value={message}
          onChangeText={onChangeMessage}
          multiline={true}
          maxLength={250}
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
  inputMessage: {
    backgroundColor: "grey",
    color: "white",
    height:100,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginHorizontal: 5,
    marginBottom: 20,
    borderRadius: 5,
    borderColor: "#EDEFEE",
    borderWidth: 1,
  },
});
