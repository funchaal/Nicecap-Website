import logo from './images/logo.svg';
import './App.css';

// import Home from './sections/Home.js'
import Reason from './sections/Home_2.js'
import Base from './sections/Home_3.js'
import Contact from './pages/Contact.js'
import Autors from './sections/Home_4.js'
import Problem from './sections/Home_5.js'

import Home from './pages/Home.js'
import Support from './pages/Support.js'
import Header from './Components/Header.js'

import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter, 
  RouterProvider, 
  Outlet, 
  Link, 
  Routes, 
  Route, 
  BrowserRouter, 
  useNavigate
} from "react-router-dom";

function App() {

  document.title = 'Nicecap'

  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/support' element={<Support />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
