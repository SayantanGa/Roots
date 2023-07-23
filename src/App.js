import { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './style.css';
import Navbar from './scripts/components/navbar';
import Login from './scripts/sections/login';
import SignUp from './scripts/sections/signup';
import Dashboard from './scripts/sections/dashboard';
import Alert from './scripts/components/alert';

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

function App() {

  const [showAlert, setShowAlert] = useState(false);
  const [displayMessage, setDisplayMessage] = useState('');
  const triggerAlert = (message='', trigger=true) => {
    setShowAlert(trigger);
    setDisplayMessage(message);
  };
  return (
    <BrowserRouter>
      <Navbar listItems = {navigatorItems} />
      { showAlert && <Alert message={displayMessage} Alert={triggerAlert} /> }
      <Routes>
        <Route exact path='/' element={<Dashboard Alert={triggerAlert} />} />
        <Route path='/login' element={<Login Alert={triggerAlert}  />} />
        <Route path='/signup' element={<SignUp Alert={triggerAlert} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
