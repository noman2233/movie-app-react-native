import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Mian from './Mian';
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Main"
        component={Mian}
        options={{
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
