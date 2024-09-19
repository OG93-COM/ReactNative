import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  useColorScheme,
  useWindowDimensions,
} from "react-native";
import { useAppState } from "@react-native-community/hooks";

//npm install @react-native-community/hooks

export default function WelcomeScreen() {
  const colorScheme = useColorScheme();
  const {height, width, fontScale} = useWindowDimensions();
  const appState = useAppState()

  return (
    <ScrollView
      style={[
        styles.container,
        colorScheme === "light"
          ? { backgroundColor: "#fff" }
          : { backgroundColor: "#333333" },
      ]}
    >
      <View style={styles.headerWrapper}>
        <Image
          style={styles.image}
          source={require("./img/logo.png")}
          resizeMode="cover"
          accessible={true}
          accessibilityLabel={"Little Lemon Logo"}
        />

        <Text style={styles.headerText}>Little Lemon</Text>
      </View>
      <Text style={styles.regularText}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear your experience with us!
      </Text>
      <Text style={styles.regularHooks}> width : {width}</Text>
      <Text style={styles.regularHooks}> Height : {height}</Text>
      <Text style={styles.regularHooks}> fontScale : {fontScale}</Text>
      <Text style={styles.regularHooks}> App State : {appState}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    margin: 10,
  },
  headerText: {
    paddingRight: 10,
    paddingLeft: 20,
    paddingTop: 30,
    paddingBottom: 10,
    fontSize: 30,
    color: "grey",
    textAlign: "center",
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "grey",
    textAlign: "center",
  },
  regularHooks: {
    fontSize: 18,
    padding: 5,
    marginVertical: 2,
    color: "green",
    textAlign: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
});
