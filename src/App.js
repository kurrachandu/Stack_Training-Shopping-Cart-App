import './Components/Common/Prelogin/App.css';
import React,{useState, useEffect} from 'react';
import Home from './Components/Common/Postlogin.js/Home';
import Login from './Components/Common/Prelogin/Login';
import  {BrowserRouter,Routes,Route, Link} from 'react-router-dom';
import Create from './Components/Common/Prelogin/Create';
import Success from './Components/Common/Postlogin.js/Success';





function App(){
  return(
    <div className='navbar'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Create/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/success' element={<Success/>}/>
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;