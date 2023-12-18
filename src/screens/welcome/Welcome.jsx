import {ImageBackground, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {COLORS, FONTS, SIZES} from '../../../constants/theme';
import SimpleButton from '../../components/SimpleButton';
import {welcomeScreen} from '../../../constants/constants';

const Welcome = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Parent');
    }, 100);
  });

  return (
    <>
      <StatusBar backgroundColor={COLORS.dark} />
      <ImageBackground source={welcomeScreen} style={styles.image}>
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <Text style={styles.heading}>Welcome to Mova</Text>
            <Text style={styles.text}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              cumque ducimus voluptates
            </Text>
            <SimpleButton
              label="Get Started"
              onPress={() => navigation.navigate('Parent')}
            />
          </View>
        </View>
      </ImageBackground>
    </>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  image: {
    width: responsiveWidth(100),
    height: responsiveHeight(100),
    resizeMode: 'cover',
  },
  container: {
    height: responsiveHeight(100),
    backgroundColor: COLORS.dark60,
  },
  wrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: responsiveHeight(63),
  },
  heading: {
    color: COLORS.light,
    ...FONTS.h1,
    fontFamily: 'Poppins-SemiBold',
  },
  text: {
    color: COLORS.light,
    ...FONTS.body2,
    textAlign: 'center',
    marginVertical: SIZES.margin * 1.1,
    lineHeight: SIZES.margin * 1.5,
  },
});
