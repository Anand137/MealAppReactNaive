import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const FavoritesScreen = props => {
  return (
    <>
      <View style={styles.Screen}>
        <Text>FavoritesScreen</Text>
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

export default FavoritesScreen;
