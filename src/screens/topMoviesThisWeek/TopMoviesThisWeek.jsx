import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {topMoviesThisWeek} from '../../../constants/dummy';
import {COLORS, SIZES, FONTS} from '../../../constants/theme';
import {activeOpacity} from '../../../constants/constants';
import {useNavigation} from '@react-navigation/native';

const TopMoviesThisWeek = ({heading, data}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.separator}></View>}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              activeOpacity={activeOpacity}
              onPress={() => navigation.navigate('Movie Detail')}
              style={styles.wrapper}>
              <Image
                source={{
                  uri: item.image,
                }}
                style={styles.image}
              />
              <Text style={styles.rating}>4.3</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default TopMoviesThisWeek;

const styles = StyleSheet.create({
  heading: {
    color: COLORS.dark,
    ...FONTS.h5,
    paddingVertical: SIZES.margin,
    fontSize: responsiveFontSize(2),
  },
  wrapper: {
    width: responsiveWidth(48),
    height: responsiveHeight(31),
    position: 'relative',
    margin: responsiveWidth(0.5),
  },
  image: {
    width: responsiveWidth(47),
    height: responsiveHeight(32),
    borderRadius: SIZES.radius,
    resizeMode: 'cover',
  },
  separator: {
    margin: responsiveWidth(1.5),
  },
  container: {
    marginLeft: responsiveWidth(2),
    marginRight: responsiveWidth(2),
  },
  rating: {
    position: 'absolute',
    top: SIZES.margin,
    marginLeft: SIZES.margin,
    color: COLORS.light,
    ...FONTS.body2,
    fontFamily: 'Poppins-Bold',
    paddingHorizontal: responsiveWidth(1),
    paddingVertical: responsiveWidth(1.2),
    backgroundColor: COLORS.primary,
    borderRadius: responsiveWidth(2),
  },
});
