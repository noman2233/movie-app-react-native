import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {COLORS, SIZES, FONTS} from '../../../../constants/theme';
import {heart} from '../../../../constants/constants';
import SimpleButton from '../../../components/SimpleButton';
import {useNavigation} from '@react-navigation/native';

const Comments = ({toggle}) => {
  const navigation = useNavigation();
  return (
    <View style={toggle === 3 ? styles.active : styles.non_active}>
      <FlatList
        data={[1, 1, 1, 1, 1]}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => {
          return (
            <View style={styles.container}>
              <View style={styles.wrapper}>
                <Image
                  source={{
                    uri: 'https://www.joblo.com/wp-content/uploads/2017/05/Spiderman-poster-6-large-1-scaled.jpg',
                  }}
                  style={styles.image}
                />
                <Text style={styles.name}>Usman Awan</Text>
              </View>
              <Text style={styles.comment}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Delectus dolorem aspernatur esse deserunt maiores.
                Reprehenderit, nisi blanditiis praesentium velit quaerat
                voluptates cum dignissimos repudiandae non eligendi maxime
                perferendis dicta. Consectetur!
              </Text>
              <View style={styles.reply_box}>
                <Image source={heart} style={styles.heart} />
                <Text style={styles.likes}>230</Text>
                {/* <Text style={styles.reply}>reply</Text> */}
              </View>
            </View>
          );
        }}
        ListFooterComponent={
          <>
            <SimpleButton
              label="Show All Comments"
              containerStyle={{
                backgroundColor: COLORS.light,
                borderWidth: 2,
                borderRadius: SIZES.radius,
                marginVertical: SIZES.margin,
              }}
              labelStyle={{
                color: COLORS.dark,
              }}
              onPress={() => navigation.navigate('All Comments')}
            />
          </>
        }
      />
    </View>
  );
};

export default Comments;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.dark80,
    marginTop: responsiveHeight(0.4),
    paddingVertical: SIZES.padding_small,
  },
  non_active: {
    display: 'none',
  },

  image: {
    width: responsiveWidth(10),
    height: responsiveHeight(5),
    borderRadius: responsiveWidth(20),
    resizeMode: 'cover',
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: SIZES.margin,
  },
  name: {
    color: COLORS.dark,
    marginLeft: SIZES.marginLarge,
  },
  comment: {
    color: COLORS.dark80,
    ...FONTS.body5,
    fontSize: responsiveFontSize(1.5),
    lineHeight: responsiveHeight(2.8),
  },
  heart: {
    width: SIZES.marginLarge,
    height: SIZES.margin,
    resizeMode: 'contain',
  },
  reply_box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: SIZES.marginLarge,
    marginTop: SIZES.padding_small,
  },
  likes: {
    color: COLORS.dark80,
    ...FONTS.body5,
  },
});
