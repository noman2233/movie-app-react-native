import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {filter} from '../../../constants/constants';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {COLORS, FONTS, SIZES} from '../../../constants/theme';

const SearcgTopeBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <TextInput placeholder="Search Fav Movies" style={styles.input} />
        <Image source={filter} style={styles.filter} />
      </View>
      <Text style={styles.heading}>Search Top Bar</Text>
    </View>
  );
};

export default SearcgTopeBar;

const styles = StyleSheet.create({
  container: {},
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: SIZES.padding_small,
  },
  input: {
    borderWidth: COLORS.error80,
    width: responsiveWidth(80),
  },
  teheadingxt: {
    color: COLORS.dark,
    ...FONTS.h4,
  },
  filter: {
    width: responsiveWidth(10),
    height: responsiveHeight(5),
    resizeMode: 'contain',
  },
});
