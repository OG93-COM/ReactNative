import {
    ScrollView,
    Text,
    View,
    StyleSheet,
    Button,
    Pressable
  } from "react-native";


const Setting = ({ navigation }) => {

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerWrapper}>
        <Text style={styles.headerText}>Setting Page</Text>
      </View>
      <Text style={styles.regularText}>
        This Is the setting page
      </Text>
      <Pressable onPress={()=> navigation.goBack()}>
        <Text style={styles.goBack}>
          Go Back
        </Text>
      </Pressable>
    </ScrollView>
  )
}

export default Setting

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#40534C",
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
    goBack:{
      textAlign:"center",
      color:"yellow",
    }
  });
  