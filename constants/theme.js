import {Dimensions} from 'react-native';
export const {width, height} = Dimensions.get('window');
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
export const COLORS = {
  // Error
  error: 'rgba(246, 86, 93, 1)',

  // Primary
  primary: '#e21221',

  // Secondary
  secondary: 'rgba(161, 219, 245, 1)',

  // Success
  success: 'rgba(253, 212, 70, 1)',

  // Dark
  dark: '#191a1f',
  dark80: 'rgba(13, 15, 35, 0.8)',
  dark60: 'rgba(13, 15, 35, 0.6)',
  dark20: 'rgba(13, 15, 35, 0.2)',
  dark08: 'rgba(13, 15, 35, 0.08)',

  // Grey
  grey: 'rgba(160, 161, 180, 1)',
  grey80: 'rgba(160, 161, 180, 0.8)',
  grey60: 'rgba(160, 161, 180, 0.6)',
  grey20: 'rgba(160, 161, 180, 0.2)',
  grey08: 'rgba(160, 161, 180, 0.08)',

  // Light Grey
  lightGrey: 'rgba(247, 247, 247, 1)',

  // Light
  light: 'rgba(255, 255, 255, 1)',
};

export const SIZES = {
  // global sizes
  base: responsiveFontSize(8),
  font: responsiveFontSize(2),
  radius: responsiveFontSize(1.3),
  padding: responsiveFontSize(2.5),
  padding_small: responsiveFontSize(1.6),
  margin: responsiveFontSize(2),
  marginLarge: responsiveFontSize(3),
  height: responsiveFontSize(20),
  heightMedium: responsiveFontSize(15),
  heightLarge: responsiveFontSize(30),
  /// icon size
  iconSizeLarge: responsiveHeight(2.4),
  iconSize: responsiveHeight(2),
  iconSizeSmall: responsiveHeight(1.5),

  // font sizes
  largeTitle: responsiveFontSize(4.5),
  h1: responsiveFontSize(4),
  h2: responsiveFontSize(2.9),
  h3: responsiveFontSize(2.7),
  h4: responsiveFontSize(2.5),
  h5: responsiveFontSize(2.3),
  h6: responsiveFontSize(2),
  body1: responsiveFontSize(2),
  body2: responsiveFontSize(1.9),
  body3: responsiveFontSize(1.85),
  body4: responsiveFontSize(1.8),
  body5: responsiveFontSize(1.75),
};

export const FONTS = {
  largeTitle: {fontFamily: 'Poppins-Bold', fontSize: SIZES.largeTitle},
  h1: {
    fontFamily: 'Poppins-Bold',
    fontSize: SIZES.h1,
  },
  h2: {
    fontFamily: 'Poppins-Bold',
    fontSize: SIZES.h2,
  },

  h3: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: SIZES.h3,
  },
  h4: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: SIZES.h4,
  },
  h5: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: SIZES.h5,
  },
  body1: {
    fontFamily: 'Poppins-Medium',
    fontSize: SIZES.body1,
  },
  body2: {
    fontFamily: 'Poppins-Medium',
    fontSize: SIZES.body2,
  },
  body3: {
    fontFamily: 'Poppins-Medium',
    fontSize: SIZES.body3,
  },
  body4: {
    fontFamily: 'Poppins-Medium',
    fontSize: SIZES.body4,
  },
  body5: {
    fontFamily: 'Poppins-Medium',
    fontSize: SIZES.body5,
  },
};

export const boxShadow = {
  shadow: {
    shadowColor: COLORS.grey,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
    borderWidth: 0.5,
    borderColor: COLORS.grey08,
  },
};

export default {responsiveHeight, responsiveWidth, responsiveFontSize};
