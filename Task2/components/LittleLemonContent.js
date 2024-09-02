import { View, Text } from "react-native";

export default function LittleLemonContent() {
  return (
    <View style={{ flex: 0.8 }}>
      <Text
        style={{
          paddingTop: 40,
          fontSize: 28,
          color: "#e3e3e3",
          textAlign: "center",
        }}
      >
        Welcome to Little Lemon
      </Text>
      <Text
        style={{
          padding: 30,
          marginVertical: 8,
          fontSize: 20,
          color: "#e3e3e3",
          textAlign: "center",
        }}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
    </View>
  );
}
