import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TextButton from '../../components/TextButton';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import InputComponent from './InputComponent';
import SimpleButton from '../../components/SimpleButton';
import AlreadyHaveAccount from './AlreadyHaveAccount';
import Logo from '../../components/Logo';
import ImageButton from '../../components/ImageButton';
import {COLORS, SIZES, FONTS} from '../../../constants/theme';
import {google_logo} from '../../../constants/constants';
// import notifee, {AndroidStyle} from '@notifee/react-native';
const Login = ({navigation}) => {
  //   const notification = async () => {
  //     await notifee.requestPermission();
  //     const channelId = await notifee.createChannel({
  //       id: 'Login-Id',
  //       name: 'Login Channel',
  //     });
  //     try {
  //       await notifee.displayNotification({
  //         title: 'Login',
  //         body: 'Successfully Logged in',
  //         android: {
  //           channelId,
  //           // smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
  //           // pressAction is needed if you want the notification to open the app when pressed
  //           color: '#00085f',
  //           pressAction: {
  //             id: 'Login-Id',
  //           },
  //           style: {
  //             type: AndroidStyle.BIGTEXT,
  //             // picture: 'https://i.ibb.co/Wf7kkHr/unnamed.png',
  //             text: 'Successfully Logged in your are beign.Redirected to Home screen',
  //           },
  //         },
  //       });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Logo />
        <View style={styles.wrapper}>
          <Text style={styles.heading}>Login To Your Account</Text>
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
          <TextButton
            title="Forgot Password"
            ConatinerStyle={{
              marginBottom: SIZES.margin,
              backgroundColor: 'transparent',
            }}
            text="Forgot Password"
            lableStyle={{
              ...FONTS.h5,
              fontSize: responsiveFontSize(1.5),
              color: COLORS.error,
              alignSelf: 'flex-end',
            }}
            onPress={() => navigation.navigate('OTP')}
          />

          <SimpleButton
            label="Login"
            onPress={() => navigation.navigate('Parent')}
          />
        </View>
        <Text style={styles.text}>or continue with</Text>

        {/* <SocialLogins /> */}
        <ImageButton image={google_logo} text="Login with Google" />

        <View style={styles.bottom_container}>
          <AlreadyHaveAccount
            title="SignUp"
            onPress={() => navigation.navigate('SignUp')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: SIZES.margin,
    // height: height,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  heading: {
    color: COLORS.dark,
    ...FONTS.h2,
    alignItems: 'center',
    paddingBottom: SIZES.margin,
  },
  wrapper: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    marginVertical: SIZES.margin,
  },
  social_wrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
  },

  text: {
    textAlign: 'center',
    color: COLORS.dark,
    ...FONTS.h6,
    paddingBottom: SIZES.marginLarge,
  },
  bottom_container: {
    flexDirection: 'column',
    justifyContent: 'center',
    paddingTop: SIZES.marginLarge,
  },
});
