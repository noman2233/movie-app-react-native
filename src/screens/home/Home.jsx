import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Slider from '../../screenComponents/home/slider/Slider';
import Popular from '../../screenComponents/home/popular/Popular';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import axios from 'axios';
import Trending from '../../screenComponents/home/trending/Trending';
import {COLORS} from '../../../constants/theme';

const Home = () => {
  // const [trending, setTrending] = useState([]);
  // const [spinner, setSpinner] = useState(true);
  // const [page, setPage] = useState(1);
  // useEffect(() => {
  //   const GetTrending = async () => {
  //     try {
  //       const {data} = await axios.get(
  //         `https://api.themoviedb.org/3/trending/all/day?api_key=d064f084e7739e4ae85bd3102be3d54f&page=${page}`,
  //       );
  //       setTrending(data.results);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //     console.log('trending', trending);
  //   };
  //   GetTrending();
  //   setSpinner(false);
  // }, [page, trending]);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <StatusBar backgroundColor={COLORS.dark} />
        <Slider />
        <Popular
          heading="Top 10 Movies this Week"
          image="https://www.tallengestore.com/cdn/shop/products/Joker_-_Put_On_A_Happy_Face_-_Joaquin_Phoenix_-_Hollywood_English_Movie_Poster_3_1f3f78b1-3366-4394-a8b2-4d8431592dac.jpg?v=1579504957"
          seeMore="See More"
        />
        <Trending
          heading="Trending Movies"
          image="https://www.abramsbooks.com/cover_images/9/9781419754609_s3.jpg"
          seeMore="See More"
        />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingBottom: responsiveHeight(10),
  },
});
