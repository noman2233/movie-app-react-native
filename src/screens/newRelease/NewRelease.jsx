import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TopMoviesThisWeek from '../topMoviesThisWeek/TopMoviesThisWeek';
import {topMoviesThisWeek} from '../../../constants/dummy';

const NewRelease = () => {
  return <TopMoviesThisWeek data={topMoviesThisWeek} />;
};

export default NewRelease;

const styles = StyleSheet.create({});
