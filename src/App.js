
import React from 'react';
import './App.css';
import ContentApp from './components/ContentApp';
import Login from './components/Login';
import MR360 from './components/MR360';
import Dashboard from './components/Dashboard';
import Form from './components/Form';
import Mapa from './components/mapa';
import Singup from './components/singup';
import RecuperarPassword from './components/recuperar_password';
import ResetearPassword from './components/resetear_password'; 
import PrivateRoutes from './components/PrivateRoutes'; 
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 


function App() {
  return (
    <>
    <Router>
    <Routes>
      <Route path="/" exact element={<ContentApp/>}/>
      <Route path="/Login" exact element={<Login />}/>
      <Route path="/singup" exact element={<Singup />}/>
      <Route path="/recuperar" exact element={<RecuperarPassword />}/>
      <Route path="/resetear" exact element={<ResetearPassword />}/>
      <Route path="*" exact element={<>NOT FOUND</>}/>
      <Route element={<PrivateRoutes />}>
        <Route path="Mapa/mr360" exact element={<MR360 />}/>
        <Route path="/Dashboard" exact element={<Dashboard />}/>
        <Route path="/Form" exact element={<Form />}/>
        <Route path="/Mapa" exact element={<Mapa />}/>
      </Route>
      
    </Routes>
     </Router>
     
     </>
  );
}

export default App;
