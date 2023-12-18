import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Logo from '../../components/Logo';
import SimpleButton from '../../components/SimpleButton';
import AlreadyHaveAccount from './AlreadyHaveAccount';
import {google_logo} from '../../../constants/constants';
import ImageButton from '../../components/ImageButton';
import InputComponent from './InputComponent';
import {COLORS, SIZES, height, FONTS} from '../../../constants/theme';

const SignUp = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Logo />
          <Text style={styles.heading}>Create an account</Text>
          <InputComponent
            onChangeText=""
            value=""
            placeholder="Enter Email"
            text="Email"
          />
          <InputComponent
            onChangeText=""
            value=""
            placeholder="Enter Password"
            text="Password"
          />
          <InputComponent
            onChangeText=""
            value=""
            placeholder="Enter Password"
            text="Confirm Password"
          />
          <SimpleButton label="Login" />
        </View>
        <View style={styles.social_wrapper}>
          <Text style={styles.text}>or continue with</Text>

          {/* <SocialLogins /> */}
          <ImageButton image={google_logo} text="Login with Google" />
        </View>

        <View style={styles.bottom_container}>
          <AlreadyHaveAccount
            title="Login"
            onPress={() => navigation.navigate('Login')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: SIZES.margin,
    height: height,
    flexDirection: 'column',
    // justifyContent: 'center',
  },
  heading: {
    color: COLORS.dark,
    ...FONTS.h2,
    alignItems: 'center',
    marginVertical: SIZES.margin,
  },
  wrapper: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  social_wrapper: {
    flexDirection: 'column',
    marginTop: SIZES.margin,
  },

  text: {
    textAlign: 'center',
    color: COLORS.dark,
    ...FONTS.h6,
    paddingBottom: SIZES.padding,
  },
  bottom_container: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
