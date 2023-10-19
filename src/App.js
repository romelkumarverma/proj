//import logo from './logo.svg';
import './App.css';
import Register from './Register'
import Login from './Login';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/register' element={<Register />}></Route>
      <Route path='/login' element={<Login />}></Route>
    </Routes>
    </BrowserRouter> 
    // <div>
    // <Register />
    // <Home />
    // </div>
  );
}

export default App;
