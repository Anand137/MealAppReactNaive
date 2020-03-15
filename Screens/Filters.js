import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Filters = props => {
  return (
    <>
      <View style={styles.Screen}>
        <Text>Filters</Text>
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

export default Filters;
