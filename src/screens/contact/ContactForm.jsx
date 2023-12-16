import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ContactInput from '../../screenComponents/contact/ContactInput';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import SimpleButton from '../../components/SimpleButton';
import {useNavigation} from '@react-navigation/native';
import {COLORS, SIZES, FONTS} from '../../../constants/theme';

const ContactForm = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tell us Anything</Text>
      <Text style={styles.text}>If you require support</Text>
      <Text style={styles.text}>or wish to speak with our counsellor</Text>
      <Text style={styles.text}>
        please email us by filling the contact form below
      </Text>

      <ContactInput placeholder="Name" keyboardType="default" />
      <ContactInput placeholder="Email" keyboardType="email-address" />
      <ContactInput placeholder="Phone no." keyboardType="phone-pad" />
      <ContactInput placeholder="Subject" keyboardType="default" />
      <ContactInput placeholder="Message" keyboardType="default" />

      <SimpleButton
        label="Send"
        onPress={() => navigation.navigate('Parent')}
      />
    </View>
  );
};

export default ContactForm;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: SIZES.margin,
  },
  title: {
    color: COLORS.dark,
    ...FONTS.h2,
    marginVertical: SIZES.margin,
  },
  text: {
    color: COLORS.dark80,
    ...FONTS.h5,
    fontSize: responsiveFontSize(1.6),
    lineHeight: SIZES.margin * 1.3,
  },
});
