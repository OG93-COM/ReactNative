import React from "react";

import { View, Text, StyleSheet, SectionList } from "react-native";

const menuItemsToDisplay = [
  {
    title: "Appetizers",
    data: [
      { name: "Hummus", price: "$5.00" },
      { name: "Moutabal", price: "$5.00" },
      { name: "Falafel", price: "$7.50" },
      { name: "Marinated Olives", price: "$5.00" },
      { name: "Kofta", price: "$5.00" },
      { name: "Eggplant Salad", price: "$8.50" },
    ],
  },
  {
    title: "Main Dishes",
    data: [
      { name: "Lentil Burger", price: "$10.00" },
      { name: "Smoked Salmon", price: "$14.00" },
      { name: "Kofta Burger", price: "$11.00" },
      { name: "Turkish Kebab", price: "$15.50" },
    ],
  },
  {
    title: "Sides",
    data: [
      { name: "Fries", price: "$3.00", id: "11K" },
      { name: "Buttered Rice", price: "$3.00" },
      { name: "Bread Sticks", price: "$3.00" },
      { name: "Pita Pocket", price: "$3.00" },
      { name: "Lentil Soup", price: "$3.75" },
      { name: "Greek Salad", price: "$6.00" },
      { name: "Rice Pilaf", price: "$4.00" },
    ],
  },
  {
    title: "Desserts",
    data: [
      { name: "Baklava", price: "$3.00" },
      { name: "Tartufo", price: "$3.00" },
      { name: "Tiramisu", price: "$5.00" },
      { name: "Panna Cotta", price: "$5.00" },
    ],
  },
];

const Item = ({ name, price }) => (
  <View style={styles.items}>
    <Text style={styles.textItems}>{name}</Text>
    <Text style={styles.textItems}>{price}</Text>
  </View>
);
const Separator = ()=> (
  <View style={styles.separator}/>
)

const MenuItems = () => {
  const renderItem = ({ item }) => <Item name={item.name} price={item.price} />;

  const renderSectionHeader = ({ section: { title } }) => (
    <Text style={styles.sectionHeader}>{title} </Text>
  );

  return (
    <View style={styles.container}>
      <SectionList
        keyExtractor={(item, index) => item + index}
        sections={menuItemsToDisplay}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        ItemSeparatorComponent={Separator}
      ></SectionList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 0.98 },
  textTitle: {
    fontSize: 20,
    color: "#EE9972",
    padding: 20,
    textAlign: "center",
  },
  items: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textItems: {
    color: "#F4CE14",
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontWeight: "600",
    fontSize: 16,
  },
  oneItem: {
    flex: 1,
  },
  sectionHeader: {
    backgroundColor: '#fbdabb',
    color: '#333333',
    fontSize: 26,
    flexWrap: 'wrap',
    textAlign: 'center',
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: "grey",
  },
  textFooterList: {
    textSize: 12,
    color: "grey",
    textAlign: "center",
    paddingTop: 20,
  },
});


export default MenuItems;
