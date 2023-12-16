import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {person} from '../../../../constants/dummy';
import {Notification} from '../../../../constants/constants';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {COLORS, FONTS, SIZES} from '../../../../constants/theme';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.profile}>Profile</Text>
        <Image source={Notification} style={styles.notifi_image} />
      </View>
      <View style={styles.profile_user}>
        <Image
          source={{
            uri: 'https://e1.pxfuel.com/desktop-wallpaper/49/663/desktop-wallpaper-new-movie-posters-hollywood-movie-2022-thumbnail.jpg',
          }}
          style={styles.image}
        />
        <Text style={styles.name}>Usman Khan</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {},
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profile: {
    color: COLORS.dark,
    ...FONTS.h4,
  },
  notifi_image: {
    width: responsiveWidth(7),
    height: responsiveHeight(7),
    resizeMode: 'contain',
  },
  image: {
    width: responsiveWidth(14),
    height: responsiveHeight(7),
    resizeMode: 'cover',
    borderRadius: responsiveWidth(20),
  },
  profile_user: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: SIZES.margin,
  },
  name: {
    color: COLORS.dark,
    ...FONTS.h5,
    marginLeft: SIZES.margin,
  },
});
