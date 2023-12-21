import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SearchComponent from '../../screenComponents/search/SearcgTopeBar';
import {SIZES} from '../../../constants/theme';
const Search = () => {
  return (
    <View
      style={{
        marginHorizontal: SIZES.padding_small,
      }}>
      <SearchComponent />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({});
