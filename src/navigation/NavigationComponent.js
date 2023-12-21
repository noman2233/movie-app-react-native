import AccountSettings from '../screens/accountSettings/AccountSettings';
import NewPassword from '../screens/authentication/NewPassword';
import Login from '../screens/authentication/Login';
import OTP from '../screens/authentication/OTP';
import SignUp from '../screens/authentication/SignUp';
import Contact from '../screens/contact/Contact';
import ContactForm from '../screens/contact/ContactForm';
import Home from '../screens/home/Home';
import MovieDetail from '../screens/movieDetail/MovieDetail';
import PrivacyPolicy from '../screens/privacyPolicy/PrivacyPolicy';
import ProfileForm from '../screens/profile/ProfileForm';
import FingerPrint from '../screens/authentication/FingerPrint';
import TopMoviesThisWeek from '../screens/topMoviesThisWeek/TopMoviesThisWeek';
import NewRelease from '../screens/newRelease/NewRelease';
import TopMoviesThisWeekTresnding from '../screens/newRelease/TopMoviesThisWeek';
import AllComments from '../screens/allComments/AllComments';
import Comments from '../screens/allComments/Comments';
import NotFound from '../screens/notFound/NotFound';
import DeveloperInfo from '../screens/developerInfo/DeveloperInfo';

export const screens = [
  {
    id: '1',
    name: 'Home',
    component: Home,
    title: 'Home',
    headerAlign: 'center',
    headers: false,
  },
  {
    id: '2',
    name: 'Movie Detail',
    component: MovieDetail,
    title: 'Movie Detail',
    headerAlign: 'center',
    // headers: true,
  },
  {
    id: '3',
    name: 'Account Settings',
    component: AccountSettings,
    title: 'AccountSettings',
    headerAlign: 'center',
    // headers: true,
  },
  {
    id: '4',
    name: 'Privacy Policy',
    component: PrivacyPolicy,
    title: 'Privacy Policy',
    headerAlign: 'center',
    headers: true,
  },
  {
    id: '5',
    name: 'Contact',
    component: Contact,
    title: 'Useful Links',
    headerAlign: 'center',
    headers: true,
  },
  {
    id: '6',
    name: 'ContactForm',
    component: ContactForm,
    title: 'Contact us',
    headerAlign: 'center',
    headers: true,
  },
  {
    id: '7',
    name: 'Profile Form',
    component: ProfileForm,
    title: 'User Form',
    headerAlign: 'center',
    headers: true,
  },
  {
    id: '8',
    name: 'Login',
    component: Login,
    title: 'Login',
    headerAlign: 'center',
    headers: true,
  },

  {
    id: '9',
    name: 'SignUp',
    component: SignUp,
    title: 'SignUp',
    headerAlign: 'center',
    headers: true,
  },
  {
    id: '10',
    name: 'New Password ',
    component: NewPassword,
    title: 'New Password',
    headerAlign: 'center',
    headers: true,
  },
  {
    id: '11',
    name: 'OTP',
    component: OTP,
    title: 'OTP',
    headerAlign: 'center',
    headers: true,
  },
  {
    id: '11',
    name: 'FingerPrint',
    component: FingerPrint,
    title: 'FingerPrint',
    headerAlign: 'center',
    headers: true,
  },
  {
    id: '11',
    name: 'Top Movies This Week',
    component: TopMoviesThisWeek,
    title: 'Top Movies This Week', 
    headerAlign: 'center',
    headers: true,
  },
  {
    id: '11',
    name: 'New Release',
    component: NewRelease,
    title: 'New Release', 
    headerAlign: 'center',
    headers: true,
  },
  {
    id: '11',
    name: 'All Movies Trending this week',
    component: TopMoviesThisWeekTresnding,
    title: 'Top Movie Trednding This Week ', 
    headerAlign: 'center',
    headers: true,
  },
  {
    id: '11',
    name: 'All Comments',
    component: AllComments,
    title: 'All Comments', 
    headerAlign: 'start',
    headers: true,
  },
  {
    id: '122',
    name: 'Comments',
    component: Comments,
    title: 'Comments', 
    headerAlign: 'start',
    headers: true,
  },
  {
    id: '122',
    name: 'NotFound',
    component: NotFound,
    title: 'NotFound', 
    headerAlign: 'start',
    headers: true,
  },
  {
    id: '122',
    name: 'Developer Information',
    component: DeveloperInfo,
    title: 'Developer Information', 
    headerAlign: 'start',
    headers: true,
  },
];
