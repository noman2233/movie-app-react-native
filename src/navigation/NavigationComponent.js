import AccountSettings from '../screens/accountSettings/AccountSettings';
import Contact from '../screens/contact/Contact';
import Home from '../screens/home/Home';
import MovieDetail from '../screens/movieDetail/MovieDetail';
import PrivacyPolicy from '../screens/privacyPolicy/PrivacyPolicy';

export const screens = [
  {
    id: '1',
    name: 'Home',
    component: Home,
    title: 'Home',
    headerAlign: 'center',
    // headers: true,
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
    id: '4',
    name: 'Contact',
    component: Contact,
    title: 'Contact Us',
    headerAlign: 'center',
    headers: true,
  },
 
];
