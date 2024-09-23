import {
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Button,
  Image
} from "react-native";
import { useState } from "react";

const Login = () => {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [messageValidation, setMessageValidation] = useState("");

  const handleLogin = () => {
    if (email !== "" && password !== "") {
      Alert.alert("✅ Welcome");
      setMessageValidation("");
    } else {
      setMessageValidation("Please add your information to login");
    }
  };
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView keyboardDismissMode="on-drag">
        <Image source={require("./assets/logo.png")}
          resizeMode="cover"
          style={styles.logo}
          accessible={true}
          accessiblityLabel="Logo of Little Lemon"/>
        <Text style={styles.regularText}>Login to continue</Text>
        <TextInput
          style={styles.input}
          keyboardType={"email-address"}
          placeholder={"Please enter your Email Here"}
          value={email}
          onChangeText={onChangeEmail}
          maxLength={50}
          clearButtonMode={"always"}
        />
        <TextInput
          style={styles.input}
          keyboardType={"default"}
          placeholder={"Please enter your Password"}
          value={password}
          onChangeText={onChangePassword}
          maxLength={30}
          secureTextEntry={true}
          clearButtonMode={"always"}
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
  )
};

export default Login;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:"#40534C",
      textAlign:"center"
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
      color: "orange",
      textAlign: "center",
    },
    input: {
      backgroundColor: "#EEEEEE",
      color: "white",
      paddingVertical: 5,
      paddingHorizontal: 10,
      marginHorizontal: 5,
      marginBottom: 20,
      borderRadius: 5,
      borderColor: "#EDEFEE",
      borderWidth: 1,
    },
    logo: {
        width: 100,
        height: 100,
        marginTop: 20,
        marginHorizontal:150,
        borderRadius: 10,
      },
  });
