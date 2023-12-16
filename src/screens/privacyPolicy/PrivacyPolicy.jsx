import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {privacy_policy} from '../../../constants/dummy';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import {COLORS, FONTS, SIZES} from '../../../constants/theme';

const PrivacyPolicy = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.wrapper}>
        {privacy_policy.map((item, index) => (
          <View style={styles.container} key={item.title}>
            <Text style={styles.heading}>{item.title}</Text>
            <Text style={styles.text}>{item.text}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default PrivacyPolicy;

const styles = StyleSheet.create({
  heading: {
    color: COLORS.dark,
    ...FONTS.h5,
    fontFamily: 'Poppins-SemiBold',
    paddingBottom: responsiveHeight(1.5),
  },
  wrapper: {
    marginBottom: SIZES.margin,
  },
  text: {
    color: '#6b6868',
    ...FONTS.body5,
    fontFamily: 'Poppins-Regular',
    fontSize: responsiveFontSize(1.7),
    lineHeight: responsiveHeight(2.9),
  },
  container: {
    shadowColor: '#908d8d',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
    marginHorizontal: SIZES.margin,
    borderWidth: 0.5,
    borderColor: COLORS.grey20,
    marginVertical: responsiveHeight(1),
    padding: SIZES.padding,
    backgroundColor: COLORS.light,
    borderRadius: SIZES.radius,
  },
});
