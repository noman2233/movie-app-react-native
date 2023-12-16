import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {COLORS, FONTS, SIZES} from '../../../../constants/theme';
import axios from 'axios';
import {data, data_1} from '../../../../constants/dummy';

const Trending = ({heading}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{heading}</Text>
      <FlatList
        data={data_1}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.separator}></View>}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => {
          return (
            <Image
              source={{
                uri: item.image,
              }}
              style={styles.image}
            />
          );
        }}
      />
    </View>
  );
};

export default Trending;

const styles = StyleSheet.create({
  heading: {
    color: COLORS.dark,
    ...FONTS.h5,
    paddingVertical: SIZES.margin,
    fontSize: responsiveFontSize(2),
  },
  image: {
    width: 170,
    height: 220,
    borderRadius: responsiveWidth(1.5),
    resizeMode: 'cover',
  },
  separator: {
    width: responsiveWidth(2),
  },
  container: {
    marginLeft: responsiveWidth(1),
  },
});
