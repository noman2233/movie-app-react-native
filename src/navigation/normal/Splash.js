import React, {useEffect} from 'react';
import Welcome from '../../screens/welcome/Welcome';
const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Parent');
    }, 2000);
  });

  return <Welcome navigation={navigation} />;
};

export default Splash;
