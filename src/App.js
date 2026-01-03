import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


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
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Paris from './components/paris';
import Tokyo from './components/tokyo';


function App() {
  const section = {
    display: 'flex',
    flexDirection : 'row',
    minHeight: '100%'
  }

  const article = {
    float: 'left',
    padding: '20px',
    width: '100%',
    backgroundColor: '#f1f1f1',
   
}


const left = {
  backgroundColor : 'lightgray',
    width: '20%',
    fontSize: '25px',
}

const right = {
  backgroundColor : '#f1f1f1',
}
  


  return(
  < >
        <div>
     
        <div>  <Header/> </div>

            <BrowserRouter>
                <section style={section}>
             <div style={left}>
              <SideBar/>
            </div>
            <div style={right}>
                    <Routes>
                          <Route path='/' element={<Dashboard article={article}/>} ></Route>
                          <Route path='/Home' element={<Dashboard article={article} />} ></Route>
                          <Route path='/london' element={<Dashboard article={article} />} ></Route>
                          <Route path='/paris' element={<Paris article={article} />} ></Route>
                          <Route path='/tokyo' element={<Tokyo article={article} />} ></Route>
                          
                    </Routes>
            </div>
                  </section>
          </BrowserRouter>
        <div className='footer'><Footer/></div>
      
        </div>
  </>
  );
}

export default App;
