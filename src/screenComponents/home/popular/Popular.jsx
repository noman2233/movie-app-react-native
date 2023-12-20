import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {COLORS, FONTS, SIZES} from '../../../../constants/theme';
import axios from 'axios';
import {data, data_1} from '../../../../constants/dummy';
import {useNavigation} from '@react-navigation/native';
import {activeOpacity} from '../../../../constants/constants';

const Popular = ({heading, seeMore}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={styles.heading}>{heading}</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('All Movies Trending this week')}>
          <Text style={styles.seemore}>{seeMore}</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.separator}></View>}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              activeOpacity={activeOpacity}
              onPress={() => navigation.navigate('Movie Detail')}>
              <Image
                source={{
                  uri: item.image,
                }}
                style={styles.image}
              />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Popular;

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
    borderRadius: SIZES.radius,
    resizeMode: 'cover',
  },
  separator: {
    width: responsiveWidth(2),
  },
  container: {
    marginLeft: responsiveWidth(1),
    marginRight: responsiveWidth(2),
  },
  seemore: {
    color: COLORS.primary,
    ...FONTS.body3,
    fontSize: responsiveFontSize(1.5),
  },
});
