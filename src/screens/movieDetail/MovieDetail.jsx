import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {
  activeOpacity,
  bookmark,
  download,
  greater,
  more,
  play,
  send,
  star,
} from '../../../constants/constants';

import Cast from '../../screenComponents/movieDetail/cast/Cast';
import IconButtons from '../../components/IconButtons';
import {SIZES, COLORS, FONTS} from '../../../constants/theme';
import MoreLikeThis from '../../screenComponents/movieDetail/moreLikeThis/MoreLikeThis';
import Share from 'react-native-share';

import Comments from '../../screenComponents/movieDetail/comments/Comments';
import Trailors from '../../screenComponents/movieDetail/trailors/Trailors';
const MovieDetail = () => {
  const [toggle, setToggle] = useState(1);
  const toggleTabs = index => {
    setToggle(index);
  };

  const options = {
    url: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    message: 'Movie booking app',
  };
  const shareModal = () => {
    Share.open(options)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        err && console.log(err);
      });
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Image
          source={{
            uri: 'https://www.joblo.com/wp-content/uploads/2017/05/Spiderman-poster-6-large-1-scaled.jpg',
          }}
          style={styles.image}
        />
        <View style={styles.main_wrapper}>
          <View style={styles.wrapper}>
            <Text style={styles.title}>Avatar : Lorem ipsum dolor sit.</Text>
            <Image source={bookmark} style={styles.icon} />
            <TouchableOpacity
              activeOpacity={activeOpacity}
              onPress={shareModal}>
              <Image source={send} style={styles.icon} />
            </TouchableOpacity>
          </View>
          <View style={styles.rating_box}>
            <Image source={star} style={styles.icon} />
            <Text style={styles.rating}>9.8</Text>
            <Image source={more} style={styles.icon} />
            <Image source={greater} style={styles.greater} />
            <Text style={styles.year}>2023</Text>
            <Text style={styles.country}>United States</Text>
            <Text style={styles.country}>Subtitles</Text>
          </View>
          {/* +++++++++++++++++++ buttons ************************ */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: SIZES.margin,
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

          <View>
            <Text style={styles.desc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              exercitationem nam dolores harum voluptatem, in dignissimos animi
              sit eveniet rem perspiciatis iste quod quia at, veritatis, nobis
              temporibus! Sapiente, rerum.
            </Text>
          </View>

          <Cast />
          {/* <Trailors /> */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: SIZES.padding_small,
            }}>
            <TouchableOpacity
              activeOpacity={activeOpacity}
              onPress={() => toggleTabs(1)}>
              <Text
                style={
                  toggle === 1 ? styles.text_active : styles.text_non_active
                }>
                Trailor
              </Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.6} onPress={() => toggleTabs(2)}>
              <Text
                style={
                  toggle === 2 ? styles.text_active : styles.text_non_active
                }>
                More like this
              </Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.6} onPress={() => toggleTabs(3)}>
              <Text
                style={
                  toggle === 3 ? styles.text_active : styles.text_non_active
                }>
                Comments
              </Text>
            </TouchableOpacity>
          </View>
          <Comments toggle={toggle} />
          <MoreLikeThis toggle={toggle} />
          <Trailors toggle={toggle} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MovieDetail;

const styles = StyleSheet.create({
  container: {},
  image: {
    width: responsiveWidth(100),
    height: responsiveHeight(45),
    resizeMode: 'cover',
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SIZES.margin,
    marginVertical: SIZES.padding_small,
  },
  main_wrapper: {
    marginHorizontal: SIZES.padding_small,
  },
  title: {
    color: COLORS.dark,
    ...FONTS.h5,
  },
  greater: {
    width: responsiveWidth(1.7),
    height: responsiveHeight(1.7),
    resizeMode: 'cover',
  },
  icon: {
    width: SIZES.marginLarge,
    resizeMode: 'contain',
  },
  rating_box: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'spa',
    alignSelf: 'flex-start',
    gap: SIZES.margin,
  },
  rating: {
    color: COLORS.primary,
    ...FONTS.body1,
    // paddingLeft: SIZES.margin,
  },
  country: {
    color: COLORS.primary,
    borderWidth: 1.5,
    borderColor: COLORS.primary,
    paddingHorizontal: responsiveWidth(1.3),
    paddingVertical: responsiveWidth(1, 7),
    textAlign: 'center',
    // ...FONTS.body5,
    fontSize: responsiveFontSize(1.4),
    borderRadius: responsiveWidth(1.3),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  year: {
    color: COLORS.dark,
    ...FONTS.body5,
  },
  desc: {
    color: 'black',
    ...FONTS.body5,
    lineHeight: SIZES.padding,
    paddingTop: SIZES.marginLarge,
    fontFamily: 'Poppins-Regular',
    fontSize: responsiveFontSize(1.6),
  },
  non_active: {
    display: 'none',
  },
  text_active: {
    color: COLORS.primary,
    ...FONTS.body1,
  },
  text_non_active: {
    color: COLORS.grey,
    ...FONTS.body5,
  },
});
