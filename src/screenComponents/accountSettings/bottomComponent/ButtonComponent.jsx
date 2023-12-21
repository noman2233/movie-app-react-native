import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS, FONTS, SIZES} from '../../../../constants/theme';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {activeOpacity, grater_than} from '../../../../constants/constants';

const ButtonComponent = ({image, label, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      onPress={onPress}
      style={styles.container}>
      <View style={styles.wrapper}>
        <Image source={image} style={styles.image} />
        <Text style={styles.text}>{label}</Text>
      </View>

      <Image source={grater_than} style={styles.image_greater} />
    </TouchableOpacity>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.grey,
    height: responsiveHeight(9),
    marginHorizontal: SIZES.margin,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text: {
    color: COLORS.dark,
    ...FONTS.h5,
    fontSize: responsiveFontSize(1.9),
    fontFamily: 'Poppins-Regular',
    textTransform: 'capitalize',
  },
  image: {
    width: responsiveWidth(7),
    height: responsiveHeight(6),
    marginRight: SIZES.margin,
    resizeMode: 'contain',
  },
  image_greater: {
    width: responsiveWidth(20),
    height: responsiveHeight(10),
    resizeMode: 'cover',
  },
});
