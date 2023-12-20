import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import SplashScreen from 'react-native-splash-screen';
import ProfileForm from './src/screens/profile/ProfileForm';
import NewPassword from './src/screens/authentication/NewPassword';
import Login from './src/screens/authentication/Login';
import SignUp from './src/screens/authentication/SignUp';
import OTP from './src/screens/authentication/OTP';
import FingerPrint from './src/screens/authentication/FingerPrint';
import TopMoviesThisWeek from './src/screens/topMoviesThisWeek/TopMoviesThisWeek';
import NewRelease from './src/screens/newRelease/NewRelease';
import DownloadModal from './src/modals/download/Download';
import MovieDetail from './src/screens/movieDetail/MovieDetail';
import RatingModal from './src/modals/rating/RatingModal';
import NotFound from './src/screens/notFound/NotFound';

const App = () => {
  useEffect(() => {
    // SplashScreen.hide();
  }, []);

  // return <TopMoviesThisWeek />;
  // return <NewRelease />;
  // return <DownloadModal/>;
  return <AppNavigator />
  // return <MovieDetail />;
  // return <RatingModal />;
  // return <NotFound />;
};

export default App;

const styles = StyleSheet.create({});
