import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {not_found} from '../../../constants/constants';
import {COLORS, FONTS, SIZES} from '../../../constants/theme';

const NotFound = () => {
  return (
    <View style={styles.container}>
      <Image source={not_found} style={styles.image} />
      <Text style={styles.text_main}>NotFound</Text>
      <Text style={styles.text}>
        Sorry, the keyword you entered could not be found.
      </Text>
      <Text style={styles.text}>
        Try to check again or search with other keywords
      </Text>
    </View>
  );
};

export default NotFound;

const styles = StyleSheet.create({
  image: {
    width: responsiveWidth(60),
    height: responsiveHeight(30),
    resizeMode: 'cover',
  },
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: responsiveWidth(100),
    height: responsiveHeight(100),
  },
  text: {
    color: COLORS.dark80,
    lineHeight: SIZES.marginLarge,
    ...FONTS.body5,
    fontSize: responsiveFontSize(1.6),
    textAlign: 'center',
  },
  text_main: {
    color: COLORS.primary,
    ...FONTS.h3,
  },
});
