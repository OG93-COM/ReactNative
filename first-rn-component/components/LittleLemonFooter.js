import { View, Text } from 'react-native';

const LittleLemonFooter = () => {
  return (
    <View style={{  backgroundColor: '#F4CE14' }}>
      <Text
        style={{
          padding: 4,
          fontSize: 15,
          color: 'black',
          textAlign: 'center',
          marginBottom: 10
        }}>
        Copyright OG93
      </Text>
    </View>
  )
}

export default LittleLemonFooter