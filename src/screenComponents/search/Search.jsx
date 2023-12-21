import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {search_search} from '../../../constants/constants';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {COLORS, FONTS, SIZES} from '../../../constants/theme';
import SearcgTopeBar from './SearcgTopeBar';

const SearchComponent = () => {
  return (
    <View style={styles.wrapper}>
      <FlatList
        ListHeaderComponent={<SearcgTopeBar />}
        data={search_search}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => {
          return (
            <View style={styles.container}>
              <Image
                source={{
                  uri: item.img,
                }}
                style={styles.image}
              />

              <Text style={styles.name}>{item.title}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default SearchComponent;

const styles = StyleSheet.create({
  wrapper: {
    marginLeft: SIZES.padding_small,
  },
  image: {
    width: responsiveWidth(35),
    height: responsiveHeight(20),
    resizeMode: 'cover',
    marginRight: SIZES.margin,
    borderRadius: SIZES.radius,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: responsiveHeight(1),
  },

  name: {
    color: COLORS.dark,
    ...FONTS.h5,
    fontSize: responsiveFontSize(2),
  },
});
