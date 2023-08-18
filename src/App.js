import React,{useState, useEffect} from 'react';
import Home from './Components/pages/Home/Home';
import Login from './Components/pages/Auth/Login';
import  {BrowserRouter,Routes,Route, Link} from 'react-router-dom';
import Create from './Components/pages/Auth/Create';
import Success from './Components/pages/Logout/Success';
import Cartpage from './Components/pages/Cart/Cartpage';

function App(){
  return(
    <div className='navbar'>
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<Create/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/cartpage' element={<Cartpage/>}/>
        <Route path='/success' element={<Success/>}/>
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;