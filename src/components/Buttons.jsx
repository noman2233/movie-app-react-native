import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {activeOpacity, data_buttons} from '../../constants/constants';
import {COLORS, FONTS, SIZES} from '../../constants/theme';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const Buttons = () => {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{
        marginBottom: SIZES.padding_small,
      }}>
      <View style={styles.wrapper}>
        {data_buttons.map(item => {
          return (
            <TouchableOpacity
              activeOpacity={activeOpacity}
              style={styles.container}
              key={item.id}>
              <Text style={styles.button}>{item.title}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default Buttons;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    borderRadius: responsiveWidth(3),
    paddingHorizontal: SIZES.padding,
    paddingVertical: responsiveHeight(1.3),
    marginLeft: responsiveWidth(1),
  },
  button: {
    color: COLORS.light,
    ...FONTS.body4,
    fontFamily: 'Poppins-SemiBold',
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsiveWidth(1.3),
  },
});
