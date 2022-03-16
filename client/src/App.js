import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Signup from './components/Login/Signup';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/HeaderL';
import Connect from './components/Connect/Connect';
import Explore from './components/Explore/Explore';

const App = () => {
  return (
    <div className="h-screen bg-[url('./images/background.jpeg')] bg-cover">
    <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/login" exact element={<Login/>} />
          <Route path="/signup" exact element={<Signup/>} />
          <Route path="/dashboard" exact element={<Dashboard/>} />
          <Route path="/connect" exact element={<Connect/>} />
          <Route path="/explore" exact element={<Explore/>} />
          {/* <Route path="/moreinfo" exact element={<Age/>} /> */}
        </Routes>
    </BrowserRouter>
    </div >
  )
  };

export default App;

