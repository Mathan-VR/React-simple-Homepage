import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import Paris from './components/paris';
import Tokyo from './components/tokyo';
import Dashboard from './components/dashboard';
import Header from './components/header';
import Footer from './components/footer';
import Home from './layout/Home';


function App_1() {

  /*const section = {
    content: "",
    display: 'flex',
    clear: 'both',
  }
  */

  return(
  <>

      <BrowserRouter>
              <Routes>
                        <Route path='/' element={<AppLayout/>}>
                                <Route path='/' element= {<Home/>} />
                                <Route path='/paris' element= {<Paris/>} />
                                <Route path='/tokyo' element= {<Tokyo/>} />                               
                        </Route>
              </Routes>
      </BrowserRouter>
  
  
    
  </>
  );
}

export default App_1;
