import { View } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import Section from './components/Section';

export default function App() {
  return (
    <>
    <View
      style={{ flex: 1, backgroundColor: '#495E57', }}>
      <LittleLemonHeader />
      <Section/>
    </View>

    <View>
      <LittleLemonFooter/>
    </View>
    </>
  );
}
