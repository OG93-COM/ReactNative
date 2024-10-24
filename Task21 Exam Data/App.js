import { useEffect, useState, useCallback, useMemo } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SectionList,
  SafeAreaView,
  StatusBar,
  Alert,
} from 'react-native';
import { Searchbar } from 'react-native-paper';
import debounce from 'lodash.debounce';
import {
  createTable,
  getMenuItems,
  saveMenuItems,
  filterByQueryAndCategories,
} from './database';
import Filters from './components/Filters';
import { getSectionListData, useUpdateEffect } from './utils';

const API_URL =
  'https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/menu-items-by-category.json';
  export const sections = ['Appetizers', 'Salads', 'Beverages'];

const Item = ({ title, price }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.title}>${price}</Text>
  </View>
);

export default function App() {
  const [data, setData] = useState([]);
  const [searchBarText, setSearchBarText] = useState('');
  const [query, setQuery] = useState('');
  const [filterSelections, setFilterSelections] = useState(
    sections.map(() => false)
  );

  const fetchData = async() => {
    try {
      const response = await fetch(API_URL);
      const json = await response.json();
      const menuItemsArray_nested = await json.menu;
      const menuItemsArray_flattened =
        await menuItemsArray_nested.map((item) => {
          return {
            id: item.id,
            title: item.title,
            price: item.price,
            category: item.category.title,
          };
        });
      return menuItemsArray_flattened;
    } catch (error) {
      console.error(error);
    }
    return [];
  }

  const loadMenuItems = useCallback(async () => {
    try {
      // Ensure the table exists before fetching data.
      await createTable();

      let res = await getMenuItems();
      if (!res.length) {
        // Fetch new data and save if local storage is empty.
        res = await fetchData();
        await saveMenuItems(res);
      }

      const sectionListData = getSectionListData(res);
      setData(sectionListData);
    } catch (error) {
      // Log error and show an alert to the user.
      console.error('Error loading menu items:', error);
      Alert.alert(
        'Error',
        error.message || 'Failed to load menu items.'
      );
    }
  }, []);

  useEffect(() => {
    loadMenuItems();
  }, [loadMenuItems]);

  useUpdateEffect(() => {
    (async () => {
      const activeCategories = sections.filter((s, i) => {
        // If all filters are deselected, all categories are active
        if (filterSelections.every((item) => item === false)) {
          return true;
        }
        return filterSelections[i];
      });
      try {
        const menuItems = await filterByQueryAndCategories(
          query,
          activeCategories
        );
        const sectionListData = getSectionListData(menuItems);
        setData(sectionListData);
      } catch (e) {
        Alert.alert(e.message);
      }
    })();
  }, [filterSelections, query]);

  const lookup = useCallback((q) => {
    setQuery(q);
  }, []);

  const debouncedLookup = useMemo(() => debounce(lookup, 500), [lookup]);

  const handleSearchChange = (text) => {
    setSearchBarText(text);
    debouncedLookup(text);
  };

  const handleFiltersChange = async (index) => {
    const arrayCopy = [...filterSelections];
    arrayCopy[index] = !filterSelections[index];
    setFilterSelections(arrayCopy);
  };

  return (
   <SafeAreaView style={styles.container}>
      <Searchbar
        placeholder="Search"
        placeholderTextColor="white"
        onChangeText={handleSearchChange}
        value={searchBarText}
        style={styles.searchBar}
        iconColor="white"
        inputStyle={{ color: 'white' }}
        elevation={0}
      />

      <Filters
        selections={filterSelections}
        onChange={handleFiltersChange}
        sections={sections}
      />

      <SectionList
        style={styles.sectionList}
        sections={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Item title={item.title} price={item.price} />
        )}
        renderSectionHeader={({ section }) => {
          if (section.data.length > 0) {
            return <Text style={styles.header}>{section.title}</Text>;
          } else {
            return null;
          }
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#495E57',
  },
  sectionList: {
    paddingHorizontal: 16,
  },
  searchBar: {
    marginBottom: 24,
    backgroundColor: '#495E57',
    shadowRadius: 0,
    shadowOpacity: 0,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  header: {
    fontSize: 24,
    paddingVertical: 8,
    color: '#FBDABB',
    backgroundColor: '#495E57',
  },
  title: {
    fontSize: 20,
    color: 'white',
  },
});
