import { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './style.css';
import Navbar from './scripts/components/navbar';
import Login from './scripts/sections/login';
import SignUp from './scripts/sections/signup';
import Dashboard from './scripts/sections/dashboard';

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

  return (
    <BrowserRouter>
      <Navbar listItems = {navigatorItems} />
      <Routes>
        <Route exact path='/' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
