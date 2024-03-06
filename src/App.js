
import React from 'react';
import './App.css';
import ContentApp from './components/ContentApp';
import Login from './components/Login';
import MR360 from './components/MR360';
import Dashboard from './components/Dashboard';
import Form from './components/Form';
import Mapa from './components/mapa';
import ErrorPage from './components/ErrorPage';
import Singup from './components/singup';
import RecuperarPassword from './components/recuperar_password';
import ResetearPassword from './components/resetear_password'; 
import PrivateRoutes from './components/PrivateRoutes'; 
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import ContentAppD from './components/ContentAppD';
import LoginD from './components/LoginD';
import DashboardD from './components/DashboardD';
import MapaD from './components/mapaD';
import MR360D from './components/MR360D';

function App() {
  return (
    <>
    <Router>
    <Routes>
      <Route path="/" exact element={<ContentApp/>}/>
      <Route path="/d" exact element={<ContentAppD/>}/>
      <Route path="/d/Login" exact element={<LoginD />}/>
      <Route path="/d/Dashboard" exact element={<DashboardD />}/>

      <Route path="/Login" exact element={<Login />}/>
      <Route path="/singup" exact element={<Singup />}/>
      <Route path="/recuperar" exact element={<RecuperarPassword />}/>
      <Route path="/reset-password">
      <Route path=":id/:token" element={<ResetearPassword />} />
      </Route>
      <Route path="*" exact element={<ErrorPage></ErrorPage>}/>
      <Route element={<PrivateRoutes />}>
        <Route path="/d/Dashboard" exact element={<DashboardD />}/>
        <Route path="/d/Mapa" exact element={<MapaD />}/>
        <Route path="/d/Mapa/mr360" exact element={<MR360D />}/>

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
