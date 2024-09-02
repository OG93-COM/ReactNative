import { View } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import Section from './components/Section';

export default function App() {
  return (
    <>
    <View
      style={{ flex: 0.96, backgroundColor: '#495E57', }}>
      <LittleLemonHeader />
      <Section/>
    </View>

    <View style={{ flex: 0.04, backgroundColor: '#495E57', }}>
      <LittleLemonFooter/>
    </View >
    </>
  );
}
