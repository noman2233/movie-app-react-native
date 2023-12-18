import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {COLORS, SIZES, height, width} from '../../../constants/theme';
import SimpleButton from '../../components/SimpleButton';
import InputComponent from '../../screenComponents/userProfile/InputComponent';

const ProfileForm = () => {
  return (
    <View style={styles.container}>
      <View style={styles.image_container}>
        <View style={styles.image_warpper}>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg',
            }}
            style={styles.image}
          />
          <TouchableOpacity style={styles.edit_box} activeOpacity={0.2}>
            <Icon
              name="edit"
              size={responsiveHeight(2.3)}
              color={COLORS.primary}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.wrapper}>
        <InputComponent placeholder="Usman Ali" keyboardType="default" />
        <InputComponent placeholder="Akbar" keyboardType="default" />
        <InputComponent
          name="calendar"
          placeholder="12-3-2002"
          keyboardType="number-pad"
        />
        <InputComponent
          name="email-edit-outline"
          placeholder="usmanawanali@gmail.com"
          keyboardType="email-address"
        />
        <InputComponent
          placeholder="0312-0655529"
          keyboardType="email-address"
        />
        <InputComponent
          name="account-circle-outline"
          placeholder="Male"
          keyboardType="default"
        />
        <SimpleButton
          label="Continue"
          containerStyle={{
            marginTop: SIZES.padding_small,
          }}
        />
      </View>
    </View>
  );
};

export default ProfileForm;

const styles = StyleSheet.create({
  container: {
    width: width,
    alignItems: 'center',
    backgroundColor: COLORS.light,
    height: height,
  },
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: responsiveHeight(3),
  },
  image_container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: responsiveHeight(2),
  },
  image_warpper: {
    position: 'relative',
    width: responsiveWidth(20),
    height: responsiveHeight(10),
  },
  image: {
    width: responsiveWidth(20),
    height: responsiveHeight(10),
    borderRadius: responsiveWidth(13),
  },
  edit_box: {
    position: 'absolute',
    right: '-5%',
    bottom: '0%',
  },
});
