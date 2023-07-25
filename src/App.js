import { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './style.css';
import Navbar from './scripts/components/navbar';
import Login from './scripts/sections/login';
import SignUp from './scripts/sections/signup';
import Dashboard from './scripts/sections/dashboard';
import Alert from './scripts/components/alert';
import {bgImg} from './scripts/functions'
import AboutPage from './scripts/sections/about';

const navigatorItems = [
  {
    name: 'Dashboard',
    link: './'
   },
   {
    name: 'Peers',
    link: '#'
   },
   {
    name: 'Peer Groups',
    link: '#'
   },
   {
    name: 'Pushes',
    link: '#'
   },
   {
    name: 'Alerts',
    link: '#'
   }
];

document.documentElement.style.setProperty('--bgImg', bgImg(Math.floor(Math.random() * 10)));

function App() {

  const [showAlert, setShowAlert] = useState(false);
  const [displayMessage, setDisplayMessage] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const triggerAlert = (message='', trigger=true) => {
    setShowAlert(trigger);
    setDisplayMessage(message);
  };

  return (
    <BrowserRouter>
      <Navbar listItems = {navigatorItems} loggedIn={loggedIn} />
      { showAlert && <Alert message={displayMessage} Alert={triggerAlert} /> }
      <Routes>
        <Route exact path='/' element={<Dashboard Alert={triggerAlert} isLoggedIn={loggedIn} />} />
        <Route path='/login' element={<Login Alert={triggerAlert} onLogin={setLoggedIn} />} />
        <Route path='/signup' element={<SignUp Alert={triggerAlert} onLogin={setLoggedIn} />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
