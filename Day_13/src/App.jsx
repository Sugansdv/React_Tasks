import React from 'react';
import Counter from './Components/Counter';
import ToggleBox from './Components/ToggleBox';
import ThemeSwitcher from './Components/ThemeSwitcher';
import UserList from './Components/UserList';
import Input from './Components/Input';
import Debounce from './Components/Debounce';
import Previous from './Components/Previous';
import Hover from './Components/Hover';
import Title from './Components/Title';
import Timeout from './Components/Timeout';
import Clipboard from './Components/Clipboard';
import MediaQuery from './Components/MediaQuery';
import OnlineStatus from './Components/OnlineStatus';
import Geolocation from './Components/Geolocation';
import Theme  from './Components/Theme';


import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
        <nav className="navbar navbar-dark bg-dark p-3">
        <span className="navbar-brand h1"></span>
        
        <span className="navbar-brand h1 px-1">Suganya S</span>
        <span className="text-light fw-bold px-1">Day_13 Tasks</span>
         <span className="text-light"></span>
      </nav>
      <Counter />
      <br />
      <hr />
      <ToggleBox />
      <br />
      <hr />
      <ThemeSwitcher />
      <br />
      <hr />
      <UserList />
      <br />
      <hr />
      <Input />
      <br />
      <hr />
      <Debounce />
      <br />
      <hr />
      <Previous />
      <br />
      <hr />
      <Hover />
      <br />
      <hr />
      <Title />
      <br />
      <hr />
      <Timeout />
      <br />
      <hr />
      <Clipboard />
      <br />
      <hr />
      <MediaQuery />
      <br />
      <hr />
      <OnlineStatus />
      <br />
      <hr />
      <Geolocation />
      <br />
      <hr />
      <Theme />
      <br />
      <br />
    </div>
  );
}

export default App;
