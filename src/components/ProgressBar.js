import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import * as Progress from 'react-native-progress';
import {COLORS, FONTS, SIZES} from '../../constants/theme';
import {responsiveHeight} from 'react-native-responsive-dimensions';
const ProgressBar = ({progress, color, text, width, height}) => {
  return (
    <View style={styles.progress_box}>
      <Text style={styles.rating_text}>{text}</Text>
      <Progress.Bar progress={progress} color={color} width={200} height={6} />
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  progress_box: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: responsiveHeight(0.4),
  },
  rating_text: {
    color: COLORS.dark,
    ...FONTS.body3,
    paddingRight: SIZES.padding_small,
  },
});
