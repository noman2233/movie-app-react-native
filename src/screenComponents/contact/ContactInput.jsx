import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../../../constants/theme';
import {responsiveHeight} from 'react-native-responsive-dimensions';
const ContactInput = ({
  keyboardType,
  multiline,
  onChange,
  value,
  placeholder,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        keyboardType={keyboardType}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        style={styles.input}
        multiline
      />
      {/* <Text style={styles.text}>Required</Text> */}
    </View>
  );
};

export default ContactInput;

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.dark60,
    paddingVertical: responsiveHeight(0.8),
    marginVertical: SIZES.font,
    color: COLORS.dark,
    ...FONTS.body4,
  },
  container: {},
  text: {
    color: COLORS.error,
    ...FONTS.body6,
    paddingTop: responsiveHeight(-1),
  },
});
