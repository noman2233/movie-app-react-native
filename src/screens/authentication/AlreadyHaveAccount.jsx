import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../../../constants/theme';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const AlreadyHaveAccount = ({title, onPress, containerStyle}) => {
  return (
    <View style={[styles.bottom, {...containerStyle}]}>
      <Text style={styles.textBottom}>Already have an account?</Text>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={onPress}
        hitSlop={{top: 15, left: 15, right: 15, bottom: 15}}>
        <Text style={styles.loginButton}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AlreadyHaveAccount;

const styles = StyleSheet.create({
  bottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: SIZES.padding_small,
  },
  textBottom: {
    color: COLORS.dark80,
    ...FONTS.body5,
    fontSize: responsiveFontSize(1.7),
  },
  loginButton: {
    color: COLORS.primary,
    ...FONTS.h5,
    fontSize: responsiveFontSize(1.5),
    paddingLeft: SIZES.padding_small,
  },
});
