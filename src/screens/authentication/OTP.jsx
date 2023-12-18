import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {COLORS, SIZES, width, height, FONTS} from '../../../constants/theme';
import HideKeyboard from '../../components/HideKeyboard';
import TextButton from '../../components/TextButton';

const OTP = () => {
  return (
    <HideKeyboard>
      <View style={styles.otp_container}>
        <View style={styles.heading_box}>
          <Text
            style={{
              color: COLORS.dark,
              paddingRight: 5,
              ...FONTS.h5,
              fontSize: 14,
            }}>
            Code has been sent to
          </Text>
          <Text style={{color: COLORS.primary, ...FONTS.text4, fontSize: 16}}>
            + 920312*******43
          </Text>
        </View>
        <View style={styles.otp_wrapper}>
          <TextInput style={styles.otp_input} keyboardType="numeric" />
          <TextInput style={styles.otp_input} keyboardType="numeric" />
          <TextInput style={styles.otp_input} keyboardType="numeric" />
          <TextInput style={styles.otp_input} keyboardType="numeric" />
        </View>

        <View style={styles.resend_option}>
          <TextButton
            contentContainerStyle={{
              backgroundColor: 'transparent',
            }}
            labelStyle={{
              color: COLORS.dark,
              paddingVertical: 10,
              ...FONTS.body2,
            }}
            label="Resend code in"
          />
          <Text style={{color: COLORS.error, paddingLeft: 5, ...FONTS.text1}}>
            55s
          </Text>
        </View>

        <TextButton
          contentContainerStyle={{
            height: 48,
            width: width / 1.3,
            borderRadius: SIZES.radius * 2,
            marginTop: 30,
          }}
          labelStyle={{
            color: COLORS.light,
            ...FONTS.h4,
          }}
          label="Verify"
        />
      </View>
    </HideKeyboard>
  );
};

export default OTP;

const styles = StyleSheet.create({
  otp_container: {
    width: width,
    height: height,
    alignItems: 'center',
    paddingTop: 100,
    // justifyContent: 'center',
    backgroundColor: COLORS.light,
  },
  otp_wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
  },
  heading_box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  otp_input: {
    width: 60,
    height: 60,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.grey40,
    // backgroundColor: COLORS.light80,
    marginHorizontal: 5,
  },
  resend_option: {
    // width: '70%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
