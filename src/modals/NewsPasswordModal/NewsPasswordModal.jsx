import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES, width} from '../../../constants/theme';
import Modal from 'react-native-modal';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {auth_person, loader} from '../../../constants/constants';
const NewsPasswordModal = ({setOpen}) => {
  return (
    <Modal
      isVisible={true}
      backdropColor={COLORS.dark}
      animationIn="slideInUp"
      onBackdropPress={() => setOpen(false)}
      backdropOpacity={0.2}
      scrollOffset={40}
      style={styles.modal}>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Image source={auth_person} style={styles.image} />
          <Text style={styles.heading}>Congratulations!</Text>
          <Text style={styles.text}>
            Your account is ready to use.you will be redirected to the home page
            in a few seconds...
          </Text>
          <Image source={loader} style={styles.GIF} />
        </View>
      </View>
    </Modal>
  );
};

export default NewsPasswordModal;

const styles = StyleSheet.create({
  modal: {
    alignItems: 'center',
  },
  container: {
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    backgroundColor: COLORS.light,
    width: responsiveWidth(90),
    height: responsiveHeight(60),
    borderRadius: SIZES.radius,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 170,
    height: 180,
    resizeMode: 'cover',
    marginBottom: SIZES.marginLarge,
  },
  GIF: {
    width: 70,
    height: 70,
    resizeMode: 'cover',
    marginTop: SIZES.marginLarge,
  },
  heading: {
    color: COLORS.primary,
    ...FONTS.h3,
    fontSize: responsiveFontSize(2.5),
  },
  text: {
    color: COLORS.dark,
    textAlign: 'center',
    paddingVertical: 10,
    ...FONTS.h1,
    lineHeight: 18,
    fontSize: responsiveFontSize(1.5),
  },
});
