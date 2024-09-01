import { View, Text, Button } from "react-native";

const Section = () => {
  return (
    <View style={{ flex:0.25 , backgroundColor: "white" }}>
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
      <Text style={{marginBottom:40,marginTop:20}}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </Text>
      <Button color="#F4CE14"   title="Click Here"></Button>
    </View>
  );
};

export default Section;
