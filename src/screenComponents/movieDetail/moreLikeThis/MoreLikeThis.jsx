import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {data} from '../../../../constants/dummy';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {COLORS, SIZES, FONTS} from '../../../../constants/theme';

const MoreLikeThis = ({toggle}) => {
  return (
    <View style={toggle === 2 ? styles.container : styles.non_active}>
      <View style={styles.container}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          renderItem={({item, index}) => {
            return (
              <View style={styles.wrapper}>
                <Image
                  source={{
                    uri: item.image,
                  }}
                  style={styles.image}
                />
                <Text style={styles.rating}>9.3</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default MoreLikeThis;

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.margin,
  },
  wrapper: {
    width: responsiveWidth(45),
    height: responsiveHeight(30),
    resizeMode: 'cover',
    // margin: SIZES.padding_small,
    marginHorizontal: responsiveWidth(1),
    marginVertical: responsiveWidth(1),
    position: 'relative',
  },
  image: {
    width: responsiveWidth(45),
    height: responsiveHeight(30),
    resizeMode: 'cover',
    borderRadius: SIZES.radius,
  },
  rating: {
    position: 'absolute',
    top: SIZES.margin,
    left: SIZES.padding_small,
    color: COLORS.light,
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.radius,
    padding: responsiveWidth(1.7),
    ...FONTS.body5,
  },
  non_active: {
    display: 'none',
  },
});
