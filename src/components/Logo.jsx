import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {SIZES} from '../../constants/theme';

const Logo = () => {
  return (
    <Image
      source={{
        uri: 'https://cdn3.iconfinder.com/data/icons/3d-applications/512/app_icons_media___netflix_logo_website_movie_series_multimedia_streaming_stream.png',
      }}
      style={styles.img}
    />
  );
};

export default Logo;

const styles = StyleSheet.create({
  img: {
    width: responsiveWidth(33),
    height: responsiveHeight(16),
    resizeModa: 'contain',
    alignSelf: 'center',
    marginVertical: SIZES.marginLarge,
  },
});
