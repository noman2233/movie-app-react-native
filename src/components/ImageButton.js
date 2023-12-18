import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {COLORS, SIZES, FONTS} from '../../constants/theme';
import {activeOpacity, google_logo} from '../../constants/constants';

const ImageButton = ({text, image}) => {
  return (
    <TouchableOpacity activeOpacity={activeOpacity} style={styles.button}>
      <Image source={google_logo} style={styles.image} />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ImageButton;

const styles = StyleSheet.create({
  button: {
    width: responsiveWidth(90),
    paddingVertical: responsiveHeight(1),
    borderWidth: 0.5,
    borderColor: COLORS.grey,
    borderRadius: SIZES.radius,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 30,
    height: 30,
    resizeMode: 'cover',
  },
  text: {
    color: COLORS.dark80,
    ...FONTS.h4,
    fontSize: responsiveFontSize(1.7),
    paddingLeft: SIZES.margin,
  },
});
