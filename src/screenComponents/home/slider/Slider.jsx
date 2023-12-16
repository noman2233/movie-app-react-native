import {FlatList, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import axios from 'axios';
import {COLORS, FONTS, SIZES} from '../../../../constants/theme';
import IconButtons from '../../../components/IconButtons';
import {download, play} from '../../../../constants/constants';
const Slider = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    let getImages = async () => {
      let {data} = await axios.get(
        'https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US',
      );

      setMovie(data.results);
    };
    getImages();
  }, []);

  return (
    <FlatList
      data={movie}
      keyExtractor={(item, index) => index.toString()}
      horizontal={true}
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      renderItem={({item, index}) => {
        const image = `https://image.tmdb.org/t/p/original/${item.backdrop_path}`;
        return (
          <View style={styles.container}>
            <ImageBackground source={{uri: image}} style={styles.image}>
              <View style={styles.wrapper}>
                <Text style={styles.heading}>{item.title}</Text>
                <Text style={styles.text}>{item?.overview?.slice(0, 100)}</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  alignSelf: 'center',
                  marginTop: responsiveHeight(20),
                  gap: SIZES.padding_small,
                }}>
                <IconButtons label="Download" source={download} />

                <IconButtons
                  label="Play"
                  source={play}
                  contentContainerStyle={{
                    backgroundColor: COLORS.light,
                    borderColor: COLORS.primary,
                    borderWidth: 1,
                  }}
                  labelStyle={{
                    color: COLORS.primary,
                  }}
                />
              </View>
            </ImageBackground>
            {/* <Text style={styles.rating}>
              Rating - {item?.vote_average?.toFixed(1)}{' '}
            </Text> */}
          </View>
        );
      }}
    />
  );
};

export default Slider;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: responsiveWidth(100),
    height: responsiveHeight(40),
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  heading: {
    color: COLORS.light,
    ...FONTS.h3,
  },
  text: {
    color: COLORS.light,
    ...FONTS.body2,
    paddingHorizontal: SIZES.padding_small,
    textAlign: 'center',
    paddingTop: responsiveHeight(2),
    lineHeight: SIZES.margin * 1.8,
  },
  wrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: responsiveHeight(5),
    backgroundColor: COLORS.dark60,
    width: '100%',
    height: '100%',
  },
  rating: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: SIZES.marginLarge,
    paddingVertical: responsiveHeight(0.5),
    color: COLORS.light,
    ...FONTS.h5,
    fontSize: responsiveFontSize(1.6),
    position: 'absolute',
    bottom: 0,
    zIndex: 999,
    textAlign: 'center',
    width: responsiveWidth(35),
    alignSelf: 'center',
    borderRadius: responsiveWidth(1),
  },
});
