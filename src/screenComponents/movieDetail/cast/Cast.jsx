import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {filmData} from '../../../../constants/dummy';
import {COLORS, FONTS, SIZES} from '../../../../constants/theme';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const Cast = ({toggle}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={filmData}
        horizontal={true}
        ItemSeparatorComponent={() => (
          <View style={{marginRight: SIZES.marginLarge}} />
        )}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => {
          return (
            <View style={styles.image_container}>
              <Image source={{uri: item.picture}} style={styles.image} />
              <View style={styles.cast_name}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.role}>{item.role}</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Cast;

const styles = StyleSheet.create({
  image_container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SIZES.margin,
  },
  container: {
    marginVertical: SIZES.margin,
  },
  image: {
    width: responsiveWidth(15),
    height: responsiveHeight(8),
    resizeMode: 'cover',
    borderRadius: responsiveWidth(30),
  },
  cast_name: {
    color: COLORS.dark,
    ...FONTS.body3,
  },
  name: {
    color: COLORS.dark,
    ...FONTS.body3,
  },
  inactive: {
    display: 'none',
  },
});
