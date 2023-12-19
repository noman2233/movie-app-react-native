import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TopMoviesThisWeek from '../topMoviesThisWeek/TopMoviesThisWeek';
import {topMoviesThisWeek} from '../../../constants/dummy';

const TopMoviesThisWeekTresnding = () => {
  return <TopMoviesThisWeek data={topMoviesThisWeek} />;
};

export default TopMoviesThisWeekTresnding;

const styles = StyleSheet.create({});
