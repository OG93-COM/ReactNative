import { View, Text, ScrollView } from "react-native";

export default function LittleLemonContent() {
  const menuItemsToDisplay = [
    'Hummus \n Moutabal \n Falafel \n Marinated Olives \n Kofta \n Eggplant Salad \n Lentil Burger \n Smoked Salmon \n Kofta Burger \n Turkish Kebab \n Fries \n Buttered Rice \n Bread Sticks \n Pita Pocket \n Lentil Soup \n Greek Salad \n Rice Pilaf \n Baklava \n Tartufo \n Tiramisu \n Panna Cotta',
  ]; 
  return (
    <View style={{ flex: 0.8 }}>
      <ScrollView
        indicatorStyle={"white"}
        horizontal={false}
        style={{
          paddingHorizontal: 40,
          paddingVertical: 40,
          backgroundColor: "#495E65",
        }}>
        <Text style={{ color: 'white', fontSize: 40, flexWrap: 'wrap' }}>
          View Menu
        </Text>
        <Text style={{ color: '#F4CE14', fontSize: 30 , paddingVertical:10 }}>
          {menuItemsToDisplay[0]}
        </Text>
      </ScrollView>
    </View>
  );
}
