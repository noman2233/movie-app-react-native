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
import SimpleButton from '../../components/SimpleButton';
import ProgressBar from '../../components/ProgressBar';
const DownloadModal = ({setOpen}) => {
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
          <Text style={styles.heading}>Download!</Text>
          <Text style={styles.text}>Movie is still downloading</Text>
          <Text style={styles.text}>Please wait or hide this process</Text>
          <ProgressBar
            progress={80}
            color={COLORS.primary}
            height="10"
            width="200"
            text="80%"
          />
          <SimpleButton
            label="Hide"
            onPress={() => setOpen(false)}
            containerStyle={{
              backgroundColor: '#ff0505b0',
              width: responsiveWidth(50),
              marginTop: SIZES.margin,
            }}
            labelStyle={{
              color: COLORS.light,
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

export default DownloadModal;

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
    width: responsiveWidth(80),
    height: responsiveHeight(40),
    borderRadius: SIZES.radius * 2,
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
    ...FONTS.h3,
    lineHeight: 18,
    fontSize: responsiveFontSize(1.5),
  },
});
