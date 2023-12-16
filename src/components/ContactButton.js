import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {activeOpacity} from '../../constants/constants';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {COLORS, SIZES, FONTS} from '../../constants/theme';
const ContactButton = ({onPress, label, image}) => {
  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      onPress={onPress}
      style={styles.button}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{label}</Text>
    </TouchableOpacity>
  );
};

export default ContactButton;

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsiveWidth(10),
    width: responsiveWidth(94),
    paddingVertical: SIZES.padding,
    marginVertical: responsiveHeight(1.8),
    backgroundColor: COLORS.light,
    shadowColor: COLORS.grey,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.17,
    shadowRadius: 2.54,
    elevation: 3,
    borderRadius: SIZES.radius,
    paddingLeft: SIZES.padding,
  },
  title: {
    color: COLORS.dark,
    ...FONTS.h5,
    fontSize: responsiveFontSize(1.8),
  },
  image: {
    width: 30,
    height: 30,
    resizeMode: 'cover',
  },
});
