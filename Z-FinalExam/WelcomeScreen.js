import { ScrollView, View, Text, StyleSheet, Image, TextInput, Button, Pressable } from 'react-native';
import * as React from "react";

export default function WelcomeScreen() {
  const [firstName, onChangeFirstName] = React.useState("");
  const [email, onChangeEmail] = React.useState("");

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerWrapper}>

      </View>
      <Text style={styles.regularText}>
        Let us get to know you!
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
          placeholder={"Please enter your Email Here"}
          value={email}
          onChangeText={onChangeEmail}
          maxLength={30}
        />
        <Pressable
            style={styles.centerItem}
            onPress={() => setIsLogin(true)}
          >
            <Text style={styles.buttonLogin}>NEXT</Text>
          </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f4',

  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 10,
  },
  input: {
    alignSelf:"center",
    color: "white",
    paddingVertical: 5,
    paddingHorizontal: 15,
    width:250,
    marginBottom: 20,
    borderRadius: 12,
    borderColor: "#406d82",
    borderWidth: 2,
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#385F71',
    textAlign: 'center',
  },
  buttonLogin: {
    backgroundColor: "#406d82",
    color: "white",
    fontSize: 26,
    fontWeight: "bold",
    padding: 10,
    marginVertical: 8,
    margin: 0,
    borderColor: "#EDEFEE",
    borderWidth: 2,
    borderRadius: 22,
    textAlign: "center",
    alignSelf:"center",
    width: 200,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
});
