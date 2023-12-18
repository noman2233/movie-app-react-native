import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {activeOpacity} from '../../constants/constants';
import {COLORS, FONTS} from '../../constants/theme';

const TextButton = ({lableStyle, onPress, text, ConatinerStyle}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {...ConatinerStyle}]}
      activeOpacity={activeOpacity}
      onPress={onPress}>
      <Text style={[styles.text, {...lableStyle}]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default TextButton;

const styles = StyleSheet.create({
  button: {
    color: COLORS.primary,
    ...FONTS.h6,
  },
});
