import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const CategoriesMeals = props => {
  return (
    <>
      <View style={styles.Screen}>
        <Text>CategoriesMeals</Text>
        <Button
          title="go to MealDetails"
          onPress={() => {
            props.navigation.navigate({
              routeName: 'MealDetails',
            });
          }}
        />

        <Button
          title="go to CategoriesScreen"
          onPress={() => {
            props.navigation.pop();
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  Screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CategoriesMeals;
