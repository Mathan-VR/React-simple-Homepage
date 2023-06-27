import './App.css';
import React from 'react';
//import { BrowserRouter, Routes, Route } from 'react-router-dom';
/*

import AppLayout from './layout/AppLayout';
import Paris from './components/paris';
import Tokyo from './components/tokyo';
import Dashboard from './components/dashboard';

*/
import Header from './components/header';
import SideBar from './components/sideBar';
import Dashboard from './components/dashboard';
import Footer from './components/footer';


function Home() {

  const section = {
    content: "",
    display: 'flex',
    clear: 'both',
  }
  

  return(
  <>

    <Header/>
        <section style={section}>
            <SideBar/>
            <Dashboard/>
        </section>

      <Footer/>
    
  </>
  );
}

export default Home;
