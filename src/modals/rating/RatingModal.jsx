import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES, width} from '../../../constants/theme';
import Modal from 'react-native-modal';

import {star, star_outline} from '../../../constants/constants';
import ProgressBar from '../../components/ProgressBar';
import SimpleButton from '../../components/SimpleButton';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
const RatingModal = ({setRatingModal}) => {
  return (
    <Modal
      isVisible={true}
      backdropColor={COLORS.dark}
      animationIn="slideInUp"
      onBackdropPress={() => setRatingModal(false)}
      backdropOpacity={0.8}
      scrollOffset={40}
      style={styles.modal}>
      <View style={styles.container}>
        <Text style={styles.heading}>Give Rating</Text>
        <View style={styles.wrapper}>
          <View>
            <Text style={styles.rating_text}>9.8/10</Text>
            <View style={styles.star_container}>
              <Image source={star} style={styles.star_image} />
              <Image source={star} style={styles.star_image} />
              <Image source={star} style={styles.star_image} />
              <Image source={star} style={styles.star_image} />
            </View>
          </View>
          <View style={styles.progress_box}>
            <ProgressBar
              progress={80}
              color={COLORS.primary}
              height="10"
              width="200"
              text="1"
            />
            <ProgressBar
              progress={70}
              color={COLORS.primary}
              height="10"
              width="200"
              text="2"
            />
            <ProgressBar
              progress={50}
              color={COLORS.primary}
              height="10"
              width="200"
              text="3"
            />
            <ProgressBar
              progress={40}
              color={COLORS.primary}
              height="10"
              width="200"
              text="4"
            />
          </View>
        </View>
        <View style={styles.start_box}>
          <Image source={star} style={styles.starImage} />
          <Image source={star} style={styles.starImage} />
          <Image source={star} style={styles.starImage} />
          <Image source={star} style={styles.starImage} />
          <Image source={star_outline} style={styles.starImage} />
        </View>
        <View style={styles.button_box}>
          <SimpleButton
            label="Cancel"
            containerStyle={{
              width: responsiveWidth(35),
              backgroundColor: COLORS.error80,
            }}
            labelStyle={{
              color: COLORS.light,
            }}
            onPress={() => setRatingModal(false)}
          />
          <SimpleButton
            label="Submit"
            containerStyle={{
              width: responsiveWidth(35),
            }}
            onPress={() => setRatingModal(false)}
          />
        </View>
      </View>
    </Modal>
  );
};

export default RatingModal;

const styles = StyleSheet.create({
  modal: {
    alignItems: 'center',
    position: 'relative',
  },
  heading: {
    color: COLORS.dark,
    ...FONTS.h4,
    paddingVertical: SIZES.padding_small,
  },
  rating_text: {
    color: COLORS.dark,
    ...FONTS.h4,
    paddingVertical: SIZES.padding_small,
  },
  container: {
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderTopRightRadius: SIZES.marginLarge * 2,
    borderTopLeftRadius: SIZES.marginLarge * 2,
    paddingVericla: SIZES.padding,
    paddingHorizontal: SIZES.padding_small,
    position: 'absolute',
    bottom: responsiveHeight(0),
  },
  wrapper: {
    width: width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: SIZES.padding_small,
  },
  star_image: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
  },
  star_container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progress_box: {
    flexDiretion: 'row',
    alignItem: 'center',
  },
  starImage: {
    width: 30,
    height: 30,
    resizeMode: 'cover',
  },
  start_box: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SIZES.padding_small,
    marginVertical: SIZES.padding_small,
  },
  button_box: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SIZES.margin,
    marginVertical: SIZES.padding_small,
  },
});
