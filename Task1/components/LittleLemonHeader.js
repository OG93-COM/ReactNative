import { View, Text } from 'react-native';

export default function LittleLemonHeader() {


  return (
    <View style={{ flex: 0.12, backgroundColor: '#F4CE14' }}>
      <Text
        style={{
          paddingTop:40 ,
          fontSize: 30,
          color: 'black',
          textAlign: 'center',
          marginTop:10
        }}>
        Little Lemon

      </Text>

    </View>
  );
}
