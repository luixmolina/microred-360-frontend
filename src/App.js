
import React from 'react';
import './App.css';

import ContentApp from './components/ContentApp';

import Login from './components/Login';
import MR360 from './components/MR360';
import Dashboard from './components/Dashboard';
import Form from './components/Form';
import Mapa from './components/mapa';
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 


function App() {
  return (
    <>
    <Router>
    <Routes>
      <Route path="/" exact element={<ContentApp/>}/>
      <Route path="/Login" exact element={<Login />}/>
      <Route path="Mapa/mr360" exact element={<MR360 />}/>
      <Route path="/Dashboard" exact element={<Dashboard />}/>
      <Route path="/Form" exact element={<Form />}/>
      <Route path="/Mapa" exact element={<Mapa />}/>
    </Routes>
     </Router>
     
     </>
  );
}

export default App;
