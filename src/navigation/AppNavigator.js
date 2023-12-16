import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import Parent from './normal/Parent';
import {screens} from './NavigationComponent';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
const Stack = createStackNavigator();
import Share from 'react-native-share';
import Splash from './normal/Splash';
import {COLORS, FONTS} from '../../constants/theme';
import Contact from '../screens/contact/Contact';
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: COLORS.light,
  },
};
const AppNavigator = () => {
  const options = {
    url: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    message: 'Hotel booking app',
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
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Parent"
          component={Parent}
          options={{
            headerShown: false,
          }}
        />
      

        {screens.map(item => (
          <Stack.Screen
            name={item.name}
            component={item.component}
            options={{
              headerShown: item.headers,
              headerTitleAlign: item.headerAlign,
              headerTitleStyle: {
                ...FONTS.h1,
                fontSize: responsiveFontSize(2),
                // height: responsiveHeight(10),
              },
              headerStyle: {
                borderBottomWidth: 0.5,
                borderBottomColor: COLORS.grey08,
              },
            }}
            key={item.id}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
