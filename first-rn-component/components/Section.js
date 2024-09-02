import { View, Text, Button, Image, StyleSheet } from "react-native";

const Section = () => {
    const styles = StyleSheet.create({
        logo: {
          width: 66,
          height: 58,
          marginTop:10,
        },
      })
  return (
    <View style={{ flex:0.4, backgroundColor: "white", alignItems: 'center' }}>
      <Text
        style={{
          padding: 5,
          fontSize: 30,
          color: "black",
          textAlign: "center",
          marginTop:20
        }}
      >
        Welcome To Our First App
      </Text>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <Text style={{marginBottom:40,marginTop:20, fontSize:14}}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </Text>
      <Button color="#F4CE14" title="Click Here For More Details"></Button>
    </View>
  );
};

export default Section;
