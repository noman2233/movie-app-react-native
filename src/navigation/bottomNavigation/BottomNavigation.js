import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS} from '../../../constants/theme';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Home from '../../screens/home/Home';
import MovieDetail from '../../screens/movieDetail/MovieDetail';
import AccountSettings from '../../screens/accountSettings/AccountSettings';
import {Image, StyleSheet} from 'react-native';
import {
  account_grey,
  account_red,
  explore_grey,
  explore_red,
  home_grey,
  home_red,
} from '../../../constants/constants';
const Bottom = createBottomTabNavigator();
const BottomNavigation = () => {
  return (
    <Bottom.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        activeTintColor: COLORS.primary,
        inactiveTintColor: COLORS.grey,
        activeBackgroundColor: 'white',
        inactiveBackgroundColor: 'white',
        tabBarShowLabel: true,
        // labelStyle: {fontSize: responsiveFontSize(1.8)},
        showIcon: true,
        tabBarStyle: {
          backgroundColor: COLORS.light,
          width: responsiveWidth(100),
          height: responsiveHeight(8),
          borderTopWidth: 2,
          borderTopColor: COLORS.grey08,
        },
      })}>
      <Bottom.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => (
            <Image
              source={focused ? home_red : home_grey}
              style={focused ? styles.active : styles.inactive}
            />
          ),
        }}
      />
      <Bottom.Screen
        name="Movie Detail"
        component={MovieDetail}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => (
            <Image
              source={focused ? explore_red : explore_grey}
              style={focused ? styles.active : styles.inactive}
            />
          ),
        }}
      />

      <Bottom.Screen
        name="Account"
        component={AccountSettings}
        options={{
          headerShown: true,
          tabBarIcon: ({focused, color, size}) => (
            <Image
              source={focused ? account_red : account_grey}
              style={focused ? styles.active : styles.inactive}
            />
          ),
        }}
      />
    </Bottom.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  active: {
    width: responsiveWidth(7),
    height: responsiveHeight(3.5),
    resizeMode: 'cover',
  },
  inactive: {
    width: responsiveWidth(5),
    height: responsiveHeight(3),
    resizeMode: 'cover',
  },
});
