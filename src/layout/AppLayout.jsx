
import React from 'react';
/*
import './App.css';
import Header from './components/header';
import SideBar from './components/sideBar';
import Dashboard from './components/dashboard';
import Footer from './components/footer';
*/
import { Outlet , Link} from "react-router-dom";



function AppLayout() {

  const section = {
    content: "",
    display: 'flex',
    clear: 'both',
  }
  const nav = {
    
    float: 'left',
    width: '20%',
    height: '300px', /* only for demonstration, should be removed */
    background: '#ccc',
    padding: '20px'
  
};


  return(
  <>
   
   <Header/>
        <section style={section}>
            <SideBar/>
            <Dashboard/>
        </section>

      <Footer/>
    
    <Outlet/>
  </>
  );
}

export default  AppLayout;
