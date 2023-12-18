import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {COLORS, width, FONTS} from '../../../constants/theme';
import HideKeyboard from '../../components/HideKeyboard';

const InputComponent = ({placeholder, name, keyboardType}) => {
  return (
    <HideKeyboard>
      <View style={styles.container}>
        <TextInput
          placeholder={placeholder}
          style={styles.placeholder_text}
          keyboardType={keyboardType}
        />
        {name && (
          <Icon name={name} color={COLORS.grey40} size={responsiveHeight(2)} />
        )}
      </View>
    </HideKeyboard>
  );
};

export default InputComponent;

const styles = StyleSheet.create({
  container: {
    width: width / 1.1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#eeeded',
    height: responsiveHeight(6),
    marginVertical: responsiveHeight(1.5),
    borderRadius: responsiveWidth(1.7),
    paddingHorizontal: responsiveWidth(2),
  },
  placeholder_text: {
    width: width / 1.3,
    ...FONTS.h1,
    fontSize: responsiveFontSize(1.7),
    color: COLORS.dark,
  },
});
