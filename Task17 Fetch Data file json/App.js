import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import menuItems from './menuItems.json'

export default App = () => {
  const {menu} = menuItems
  const separator = () => <View style={menuStyles.separator}></View>;

  

  const Item = ({ name, price }) => {
    return (
      <View style={menuStyles.innerContainer}>
          <Text style={menuStyles.itemText}> {name} </Text>
          <Text style={menuStyles.itemText}> $ {price} </Text>
      </View>
    );
  };

  const renderItem = ({ item }) => <Item name={item.title} price={item.price} />;

  return (
    <SafeAreaView style={menuStyles.container}>
      <Text style={menuStyles.headerText}>Little Lemon</Text>
        <FlatList
          data={menu}
          keyExtractor={({id}) => id}
          renderItem={renderItem}
          ItemSeparatorComponent={separator}
        ></FlatList>
    </SafeAreaView>
  );
};

const menuStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    color: "#495E57",
    fontSize: 30,
    textAlign: "center",
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: "grey",
  },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: "#495E57",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemText: {
    color: "#F4CE14",
    fontSize: 22,
  },
});
