import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const MealsDetailScreen = props => {
  return (
    <>
      <View style={styles.Screen}>
        <Text>MealsDetailScreen</Text>

        <Button
          title="go to CategoriesScreen"
          onPress={() => {
            props.navigation.popToTop();
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

export default MealsDetailScreen;
