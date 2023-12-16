import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ContactButton from '../../components/ContactButton';
import {
  facebook,
  headphone,
  instagram,
  twitter,
  website,
  whatsapp,
} from '../../../constants/constants';

const Contact = () => {
  return (
    <View style={styles.copntainer}>
      <ContactButton image={headphone} label="Customer Support" />
      <ContactButton image={facebook} label="Facebook" />
      <ContactButton image={twitter} label="Twitter" />
      <ContactButton image={whatsapp} label="Whatsapp" />
      <ContactButton image={instagram} label="Instagram" />
      <ContactButton image={website} label="Website" />
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({
  copntainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
