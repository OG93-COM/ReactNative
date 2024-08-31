import { View, Text } from 'react-native';

const Section = () => {
  return (
    <View style={{  backgroundColor: 'white' }}>
      <Text
        style={{
          padding:5 ,
          fontSize: 30,
          color: 'black',
          textAlign: 'center',
        }}>
        Welcome To Our First App
      </Text>
      <Text>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </Text>
    </View>
  )
}

export default Section