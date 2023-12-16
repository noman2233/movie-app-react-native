import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {activeOpacity} from '../../constants/constants';
import {COLORS, SIZES, FONTS} from '../../constants/theme';

const IconButtons = ({
  onPress,
  source,
  labelStyle,
  label,
  contentContainerStyle,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      onPress={onPress}
      style={{
        width: responsiveWidth(45),
        paddingVertical: responsiveHeight(0.8),
        backgroundColor: COLORS.primary,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: SIZES.padding_small,
        borderRadius: SIZES.radius * 4,
        ...contentContainerStyle,
      }}>
      <Image source={source} style={styles.image} />
      <Text
        style={{
          color: COLORS.light,
          ...FONTS.body3,
          ...labelStyle,
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default IconButtons;

const styles = StyleSheet.create({
  button: {
    width: responsiveWidth(45),
    paddingVertical: responsiveHeight(1),
    backgroundColor: COLORS.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: SIZES.padding_small,
    borderRadius: SIZES.radius * 4,
  },
  image: {
    width: 20,
    height: 20,
    resizeMode: 'cover',
  },
  text: {
    color: COLORS.light,
    ...FONTS.body3,
  },
});
