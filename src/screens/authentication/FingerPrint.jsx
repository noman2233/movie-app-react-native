import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS, height, width} from '../../../constants/theme';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import TextButton from '../../components/TextButton';
import {fingerprint} from '../../../constants/constants';

const FingerPrint = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}>
          Add a fingerprint to make your account more secure
        </Text>
        <Image source={fingerprint} style={styles.image} />
        <Text style={styles.text_1}>
          Please put your finger on the fingerprint scanner to get started
        </Text>
        <View style={styles.buttons}>
          <TextButton
            contentContainerStyle={{
              height: responsiveHeight(6.5),
              width: responsiveWidth(35),
              borderRadius: responsiveWidth(7),
              marginTop: responsiveHeight(1),
              backgroundColor: '#E9F0FF',
            }}
            labelStyle={{
              color: COLORS.primary,
              ...FONTS.h4,
              fontSize: responsiveFontSize(1.8),
            }}
            label="Skip"
          />

          <TextButton
            contentContainerStyle={{
              height: responsiveHeight(6.5),
              width: responsiveWidth(35),
              borderRadius: responsiveWidth(7),
              marginTop: responsiveHeight(1),
              backgroundColor: COLORS.secondary,
            }}
            labelStyle={{
              color: COLORS.light,
              ...FONTS.h4,
              fontSize: responsiveFontSize(1.8),
            }}
            label="Continue"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FingerPrint;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.light,
  },
  image: {
    width: responsiveWidth(50),
    height: responsiveHeight(25),
    resizeMode: 'cover',
    marginVertical: 100,
  },
  text: {
    color: COLORS.dark,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    fontSize: responsiveFontSize(2.1),
    marginHorizontal: responsiveWidth(3),
  },
  text_1: {
    color: COLORS.dark,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    fontSize: responsiveFontSize(2.1),
    marginHorizontal: responsiveWidth(3),
  },
  buttons: {
    width: width / 1.1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 20,
  },
});
