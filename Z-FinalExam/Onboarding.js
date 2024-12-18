import { ScrollView, View, Text, StyleSheet, TextInput, Pressable, KeyboardAvoidingView, Alert, Keyboard } from 'react-native';
import * as React from "react";

export default function Onboarding({navigation}) {
  const [firstName, onChangeFirstName] = React.useState("");
  const [email, onChangeEmail] = React.useState("");
  const [messageValidation,setMessageValidation] = React.useState("")

  const handleLogin = ()=> {
    if(email !== "" && firstName !==""){
      Keyboard.dismiss()
      Alert.alert("✅ Welcome");
      setMessageValidation("");
      navigation.navigate("profile");
    } else if(firstName !== ""){
      setMessageValidation("Please add your email")
    } else {
      setMessageValidation("Please add your firstname")
    }
  }

  return (
    <KeyboardAvoidingView
    style={styles.container}
    behavior={Platform.OS === "ios" ? "padding" : "height"}
  >
    <ScrollView style={styles.container}>
      <View style={styles.headerWrapper}>

      </View>
      <Text style={styles.regularText}>
        Let us get to know you!
      </Text>
      <Text style={styles.label}>Your First Name :</Text>
      <TextInput
          style={styles.input}
          keyboardType={"default"}
          placeholder={"Please enter your First Name Here"}
          value={firstName}
          onChangeText={onChangeFirstName}
          maxLength={30}
        />
        <Text style={styles.label}>Your Email : </Text>
        <TextInput
          style={styles.input}
          keyboardType={"default"}
          placeholder={"Please enter your Email Here"}
          value={email}
          onChangeText={onChangeEmail}
          maxLength={30}
        />
        {messageValidation !== "" && (
          <Text style={styles.validation}>{messageValidation}</Text>
        )}
        <Pressable
            style={styles.centerItem}
            onPress={handleLogin}
          >
            <Text style={styles.buttonLogin}>NEXT</Text>
          </Pressable>
    </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cbd2da',

  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:"center",
    margin: 10,
  },
  label:{
    textAlign:"center",
    padding:5,
    fontSize:17,
    color: '#334753'
  },
  input: {
    alignSelf:"center",
    color: "#334753",
    paddingVertical: 5,
    paddingHorizontal: 15,
    width:250,
    marginBottom: 20,
    borderRadius: 12,
    borderColor: "#334753",
    borderWidth: 2,
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginTop: 30,
    marginBottom: 50,
    color: '#334753',
    textAlign: 'center',
    fontWeight:"bold",
  },
  buttonLogin: {
    color: "#334753",
    fontSize: 18,
    paddingVertical:5,
    marginVertical: 8,
    borderColor: "#334753",
    borderWidth: 2,
    borderRadius: 12,
    textAlign: "center",
    alignSelf:"center",
    width: 120,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  validation: {
    fontSize: 12,
    padding: 5,
    marginVertical: 2,
    color: "red",
    textAlign: "center",
  },
});
