import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, SIZES, FONTS} from '../../constants/theme';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {activeOpacity} from '../../constants/constants';

const SimpleButton = ({label, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={activeOpacity}
      style={styles.button}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

export default SimpleButton;

const styles = StyleSheet.create({
  text: {
    color: COLORS.light,
    ...FONTS.h3,
    fontSize: responsiveFontSize(2),
  },
  button: {
    width: responsiveWidth(92),
    textAlign: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: SIZES.padding_small,
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.radius * 5,
  },
});
