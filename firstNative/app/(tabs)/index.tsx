import * as React from 'react';
import { View } from 'react-native';
import Header from "@/components/Header";

export default function HomeScreen() {
  return (
    <View
          style={{
            flex: 1,
            backgroundColor: '#495E57',
          }}>
      <Header />
    </View>

  )
}
