import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Lock from 'react-native-vector-icons/Feather';
import {COLORS, FONTS, SIZES, height, width} from '../../../constants/theme';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import SimpleButton from '../../components/SimpleButton';
import HideKeyboard from '../../components/HideKeyboard';
import {main_forgot} from '../../../constants/constants';
import NewsPasswordModal from '../../modals/NewsPasswordModal/NewsPasswordModal';

const NewPassword = () => {
  const [open, setOpen] = useState(false);

  return (
    <SafeAreaView>
      <HideKeyboard>
        <View style={styles.newPassword_container}>
          <View style={styles.imageWrapper}>
            <Image
              source={{
                uri: 'https://media.licdn.com/dms/image/D4D12AQFp77RW83L1wg/article-cover_image-shrink_600_2000/0/1699339998851?e=2147483647&v=beta&t=fP292lGct7EvaVy8cWzun_QBiKuZYafbC7TjsWOr43M',
              }}
              style={styles.newImage}
            />
          </View>
          <View style={styles.new_box}>
            <View style={styles.new_input}>
              <Lock name="lock" size={responsiveHeight(2.2)} color="grey" />
              <TextInput
                placeholder="Password"
                style={styles.input_main}
                keyboardType="default"
                secureTextEntry
              />
            </View>
            <View style={styles.new_input}>
              <Lock name="lock" size={responsiveHeight(2.2)} color="grey" />
              <TextInput
                placeholder="Re-Enter Password"
                keyboardType="default"
                style={styles.input_main}
              />
            </View>
            <View style={styles.remeber_container}>
              <View style={styles.remeber_box}></View>
              <Text style={{color: COLORS.grey, ...FONTS.h6}}>Remember me</Text>
            </View>
          </View>
          <SimpleButton
            label="Finalize"
            containerStyle={{
              marginTOP: SIZES.padding_small,
            }}
            onPress={() => setOpen(true)}
          />
          {open && <NewsPasswordModal setOpen={setOpen} />}
        </View>
      </HideKeyboard>
    </SafeAreaView>
  );
};

export default NewPassword;

const styles = StyleSheet.create({
  newPassword_container: {
    width: width,
    height: height,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.light,
  },
  image_wrapper: {
    height: '25%',
  },

  newImage: {
    width: responsiveWidth(90),
    height: responsiveHeight(40),
    resizeMode: 'cover',
    marginBottom: responsiveHeight(5),
  },
  select: {
    color: COLORS.dark,
    fontSize: SIZES.h5,
    paddingVertical: 10,
  },
  new_box: {
    marginVertical: 20,
    width: width / 1.12,
    // paddingHorizontal: 5,
  },
  remeber_container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  remeber_box: {
    width: 18,
    height: 18,
    backgroundColor: COLORS.grey80,
    marginRight: 10,
    borderRadius: 4,
  },
  new_input: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: responsiveHeight(1.5),
    backgroundColor: COLORS.grey20,
    fontSize: SIZES.body5,
    paddingLeft: responsiveWidth(3),
    borderRadius: 8,
    height: responsiveHeight(6),
  },
  input_main: {
    width: '100%',
    paddingLeft: responsiveWidth(2),
    fontSize: responsiveFontSize(1.7),
  },
});
