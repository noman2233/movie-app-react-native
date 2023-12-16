import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ButtonComponent from './bottomComponent/ButtonComponent';
import {
  Account,
  Login,
  Notification,
  analyze,
  booking,
  contact,
  favourite,
} from '../../../constants/constants';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import Header from './header/Header';
import {useNavigation} from '@react-navigation/native';
import {COLORS, SIZES, FONTS} from '../../../constants/theme';

const AccountSettings = () => {
  const navigation = useNavigation();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Header />
        <Text style={styles.heading}>Settings</Text>
        <ButtonComponent
          label="Persoanl Information"
          image={Account}
          onPress={() => navigation.navigate('User Profile Form')}
        />
        <ButtonComponent
          label="Login & Security "
          image={Login}
          onPress={() => navigation.navigate('Login')}
        />
        <ButtonComponent
          label="Favourite"
          image={favourite}
          onPress={() => navigation.navigate('Favourites')}
        />
        <ButtonComponent
          label="Booking"
          image={booking}
          onPress={() => navigation.navigate('Booking')}
        />
        <ButtonComponent label="Notification" image={Notification} />
        <ButtonComponent
          label="Contact Us"
          image={contact}
          onPress={() => navigation.navigate('Contact')}
        />
        <ButtonComponent
          label="Privecy Policy"
          image={analyze}
          onPress={() => navigation.navigate('Privacy Policy')}
        />
        <ButtonComponent
          label="Terms & Conditions"
          image={analyze}
          onPress={() => navigation.navigate('Terms Conditions')}
        />
      </View>
    </ScrollView>
  );
};

export default AccountSettings;

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.margin,
    marginHorizontal: responsiveWidth(2),
  },
  heading: {
    color: COLORS.dark,
    ...FONTS.h3,
    marginTop: SIZES.margin,
    paddingLeft: SIZES.margin,
  },
});
