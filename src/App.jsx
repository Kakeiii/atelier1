import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './navbar/Footer';
import React from 'react';
import NavBar from './navbar/NavBar';
import Homepage from './pages/Homepage';
import ListUsersAxios from './pages/ListUsersAxios';
import ListUsersFetch from './pages/ListUsersFetch';
import Inscription from './pages/Inscription';
import Modification from './pages/Modification';
import Suppression from './pages/Suppression';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <div>
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/listAxios' element={<ListUsersAxios />}/>
        <Route path='/listFetch' element={<ListUsersFetch />}/>
        <Route path='/options/1' element={<Inscription />}/>
        <Route path='/options/2' element={<Modification />}/>
        <Route path='/options/3' element={<Suppression />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
      </div>
      <Footer />
    </BrowserRouter>
   
  );
}

export default App;
