import logo from './images/logo.svg';
import './App.css';

// import Home from './sections/Home.js'
import Contact from './pages/Contact.js'

import Home from './pages/Home.js'
import Support from './pages/Support.js'
import Header from './components/Header.js'

import React, { useEffect } from "react";
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

  useEffect(() => {
    window.addEventListener('scroll', scroller)
  })

  let CURRENT_SCROLL = 0

  function scroller (e) {
    document.getElementById('menu').classList.remove('show')
    const last_scroll = CURRENT_SCROLL
    CURRENT_SCROLL = window.scrollY
    const header = document.querySelector('header')
    if (CURRENT_SCROLL < header.offsetHeight + 300) { header.classList.remove('show'); if (CURRENT_SCROLL < header.offsetHeight) { header.classList.remove('float') }; return }
    if (!header.classList.contains('float')) {
      header.classList.add('off')
      setTimeout(() => header.classList.add('float'), 50)
      setTimeout(() => header.classList.remove('off'), 100)
    }
    if (last_scroll > CURRENT_SCROLL) header.classList.add('show')
    else header.classList.remove('show')
  }

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

export default App
