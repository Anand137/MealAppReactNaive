import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';

const CategoriesScreen = props => {
  console.log(props);

  const renderGridItem = itemData => {
    return (
      <>
        <TouchableOpacity
          style={styles.gridItem}
          onPress={() => {
            props.navigation.navigate({routeName: 'Meals'});
          }}>
          <View>
            <Text>{itemData.item.title}</Text>
          </View>
        </TouchableOpacity>
      </>
    );
  };

  return (
    <>
      <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
    </>
  );
};

// CategoriesScreen.navigationOptions = {
//   headerTitle: 'Meal Categories',
//   headerStyle:{

//   }
// };

const styles = StyleSheet.create({
  Screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});

export default CategoriesScreen;
