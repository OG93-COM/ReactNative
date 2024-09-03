import { View, Text , StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container:{ backgroundColor: '#EE9972' },
  header:{
    padding: 40,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center',
  }
})

export default function LittleLemonHeader() {
  return (
    <View style={styles.container}>
      <Text
        style={styles.header}>
        Little Lemon
      </Text>
    </View>
  );
}
