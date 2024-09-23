import { View, Text } from 'react-native';

export default function LittleLemonHeader() {
  return (
    <View style={{ flex:0.1, backgroundColor: '#F4CE14' }}>
      <Text
        style={{
          paddingTop: 40,
          fontSize: 30,
          color: 'black',
          fontWeight:"bold",
          textAlign: 'center',
        }}>
        Little Lemon
      </Text>
    </View>
  );
}
