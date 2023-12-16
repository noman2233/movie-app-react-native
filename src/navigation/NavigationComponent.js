import AccountSettings from '../screens/accountSettings/AccountSettings';
import Contact from '../screens/contact/Contact';
import ContactForm from '../screens/contact/ContactForm';
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
 
];
