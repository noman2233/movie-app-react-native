import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../../../constants/theme';
import {Icon} from 'react-native-vector-icons/';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';

const InputComponent = ({
  placeholder,
  text,
  keyboardType,
  onChangeText,
  value,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <TextInput
        placeholder={placeholder}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        value={value}
        style={styles.input}
      />
    </View>
  );
};

export default InputComponent;

const styles = StyleSheet.create({
  container: {
    marginVertical: responsiveHeight(1),
    height: responsiveHeight(12),
    // backgroundColor:'red'
  },
  input: {
    backgroundColor: COLORS.grey20,
    marginVertical: SIZES.margin,
    borderRadius: responsiveFontSize(1),
    paddingLeft: SIZES.padding,
    height: responsiveHeight(6.5),
    // fontfamily: 'Quicksand-Regular',
    ...FONTS.h3,
    fontSize: responsiveFontSize(1.5),
  },
  text: {
    color: COLORS.dark,
    ...FONTS.h2,
    fontSize: responsiveFontSize(1.5),
  },
});
