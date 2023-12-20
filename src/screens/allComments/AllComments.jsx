import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Comments from './Comments';
import {SIZES} from '../../../constants/theme';

const AllComments = () => {
  return (
    <View style={styles.continer}>
      <Comments />
    </View>
  );
};

export default AllComments;

const styles = StyleSheet.create({
  continer: {
    marginHorizontal: SIZES.padding,
  },
});
