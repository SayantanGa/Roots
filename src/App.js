import { useState } from 'react';
import './style.css';
import Navbar from './scripts/components/navbar';
import Login from './scripts/sections/login';
import SignUp from './scripts/sections/signup';
import Dashboard from './scripts/sections/dashboard';

const showSection = [ <Dashboard /> ] //**DEBUG**[ <Dashboard />, <SignUp />, <Login />, <About /> ];
const navigatorItems = ['Dashboard', 'Peers', 'Peer Groups', 'Pushes', 'Alerts'];

function App() {
  const [currentSection, setCurrentSection] = useState(showSection[0]);  //**DEBUG**Needed to be changed to showSection[0]
  return (
    <div>
      <Navbar listItems = {navigatorItems} />
      {currentSection}
    </div>
  );
}

export default App;
