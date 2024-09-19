import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  useColorScheme,
  useWindowDimensions,
} from "react-native";

export default function WelcomeScreen() {
  const colorScheme = useColorScheme();
  const {height, width, fontScale} = useWindowDimensions();
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
      <Text style={styles.regularText}> width : {width}</Text>
      <Text style={styles.regularText}> Height : {height}</Text>
      <Text style={styles.regularText}> fontScale : {fontScale}</Text>
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
  image: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
});
