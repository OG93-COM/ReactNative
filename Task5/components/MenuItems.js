import { View, Text, FlatList, StyleSheet } from "react-native";

const menuItemsToDisplay = [
  { name: "Hummus", price: "$5.00", id: "1A" },
  { name: "Moutabal", price: "$5.00", id: "2B" },
  { name: "Falafel", price: "$7.50", id: "3C" },
  { name: "Marinated Olives", price: "$5.00", id: "4D" },
  { name: "Kofta", price: "$5.00", id: "5E" },
  { name: "Eggplant Salad", price: "$8.50", id: "6F" },
  { name: "Lentil Burger", price: "$10.00", id: "7G" },
  { name: "Smoked Salmon", price: "$14.00", id: "8H" },
  { name: "Kofta Burger", price: "$11.00", id: "9I" },
  { name: "Turkish Kebab", price: "$15.50", id: "10J" },
  { name: "Fries", price: "$3.00", id: "11K" },
  { name: "Buttered Rice", price: "$3.00", id: "12L" },
  { name: "Bread Sticks", price: "$3.00", id: "13M" },
  { name: "Pita Pocket", price: "$3.00", id: "14N" },
  { name: "Lentil Soup", price: "$3.75", id: "15O" },
  { name: "Greek Salad", price: "$6.00", id: "16Q" },
  { name: "Rice Pilaf", price: "$4.00", id: "17R" },
  { name: "Baklava", price: "$3.00", id: "18S" },
  { name: "Tartufo", price: "$3.00", id: "19T" },
  { name: "Tiramisu", price: "$5.00", id: "20U" },
  { name: "Panna Cotta", price: "$5.00", id: "21V" },
];
const separator = ()=> (
    <View style={styles.separator}></View>
)

const Item = ({ id, name, price }) => {
  return (
    <View style={styles.items}>
      <View style={styles.items}>
        <Text style={styles.textItems}> {id} </Text>
        <Text style={styles.textItems}> {name} </Text>
      </View>
      <Text style={styles.textItems}> {price} </Text>
    </View>
  );
};

const MenuItems = () => {
  const renderItem = ({ item }) => (
    <Item name={item.name} price={item.price} id={item.id} />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>List of Menu</Text>
      <FlatList
        data={menuItemsToDisplay}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={separator}
      ></FlatList>
    </View>
  );
};

export default MenuItems;

const styles = StyleSheet.create({
  container: { flex: 0.85 },
  textTitle: {
    fontSize: 20,
    color: "#EE9972",
    padding: 20,
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
  separator:{
    borderBottomWidth:1,
    borderColor:"grey"
  }
});
