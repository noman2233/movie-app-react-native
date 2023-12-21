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
              <View style={styles.mini_wrapper}>
                <View style={styles.wrapper}>
                  <Text style={styles.heading}>{item.title}</Text>
                  <Text style={styles.text}>
                    {item?.overview?.slice(0, 30)}......
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      gap: SIZES.padding_small,
                      marginTop: SIZES.margin,
                    }}>
                    <IconButtons
                      label="Download"
                      source={download}
                      contentContainerStyle={{
                        width: responsiveWidth(30),
                      }}
                      labelStyle={{
                        fontSize: responsiveFontSize(1.5),
                        fontFamily: 'Poppins-Bold',
                      }}
                    />
                    <IconButtons
                      label="Play"
                      source={play}
                      contentContainerStyle={{
                        backgroundColor: COLORS.light,
                        borderColor: COLORS.primary,
                        borderWidth: 1,
                        width: responsiveWidth(30),
                      }}
                      labelStyle={{
                        color: COLORS.primary,
                        fontSize: responsiveFontSize(1.5),
                        fontFamily: 'Poppins-Bold',
                      }}
                    />
                  </View>
                </View>
              </View>
            </ImageBackground>
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
    width: responsiveWidth(100),
    height: '100%',
    resizeMode: 'cover',
    flexDirection: 'column',
  },
  heading: {
    color: COLORS.light,
    ...FONTS.h3,
  },
  text: {
    color: COLORS.light,
    ...FONTS.body2,
    paddingTop: responsiveHeight(1),
    lineHeight: SIZES.margin * 1.8,
  },
  wrapper: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
    width: '100%',
    height: '100%',
    top: responsiveHeight(15),
    paddingLeft: SIZES.margin,
  },
  mini_wrapper: {
    backgroundColor: COLORS.dark60,
    width: responsiveWidth(100),
    height: responsiveHeight(40),
  },
});
