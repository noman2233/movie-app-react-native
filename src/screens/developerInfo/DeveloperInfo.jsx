import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {google_play} from '../../../constants/constants';
import {COLORS, height, width, FONTS, SIZES} from '../../../constants/theme';

const DeveloperInfo = () => {
  return (
    <View style={styles.developerInfo_container}>
      <View style={styles.developerInfo_wrapper}>
        <View style={styles.developerInfo_logo}>
          <Image source={google_play} style={styles.logo_logo} />
          <Text style={{color: COLORS.dark, textAlign: 'center', ...FONTS.h2}}>
            Noman Sanaullah
          </Text>
        </View>
        <Text style={{color: COLORS.dark, paddingTop: 20, ...FONTS.h3}}>
          Developer Information
        </Text>
        <View style={styles.developerInfo_box}>
          <Text style={{color: COLORS.grey, ...FONTS.h5}}>Developer Name</Text>
          <Text style={{color: COLORS.dark80, ...FONTS.h5}}>
            Noman Sanaullah
          </Text>
        </View>

        <View style={styles.developerInfo_box}>
          <Text style={{color: COLORS.grey, ...FONTS.h5}}>Phone Number</Text>
          <Text style={{color: COLORS.dark80, ...FONTS.h5}}>
            (+92)0312-0655529
          </Text>
        </View>
        <View style={styles.developerInfo_box}>
          <Text style={{color: COLORS.grey, ...FONTS.h5}}>Email</Text>
          <Text style={{color: COLORS.dark80, ...FONTS.h5}}>
            nomansanaullah2233@gmail.com
          </Text>
        </View>
        <View style={styles.developerInfo_box}>
          <Text style={{color: COLORS.grey, ...FONTS.h5}}>Date Of Birth</Text>
          <Text style={{color: COLORS.dark80, ...FONTS.h5}}>6/7/2000</Text>
        </View>
        <View style={styles.developerInfo_box}>
          <Text style={{color: COLORS.grey, ...FONTS.h5}}>Gender</Text>
          <Text style={{color: COLORS.dark80, ...FONTS.h5}}>Male</Text>
        </View>
      </View>
    </View>
  );
};

export default DeveloperInfo;

const styles = StyleSheet.create({
  developerInfo_container: {
    height: height,
    backgroundColor: COLORS.grey08,
    borderRadius: SIZES.margin,
    padding: SIZES.padding_small,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  developerInfo_wrapper: {
    width: width / 1.11,
    backgroundColor: COLORS.light80,
    borderRadius: SIZES.radius,
    padding: SIZES.padding,
    marginVertical: SIZES.margin,
  },
  developerInfo_logo: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo_logo: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
    marginVertical: SIZES.margin,
  },
  developerInfo_box: {
    marginVertical: SIZES.margin,
  },
});
