
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ContentApp from './components/ContentApp';
import Footer from './components/Footer';
import Login from './components/Login';
import MR360 from './components/MR360';
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 


function App() {
  return (
    <>
    <Router>
     <Navbar />

    <Routes>
      <Route path="/Home" exact element={<ContentApp/>}/>
      <Route path="/Login" exact element={<Login />}/>
      <Route path="/mr360" exact element={<MR360 />}/>
    </Routes>
     </Router>
     <Footer />
     </>
  );
}

export default App;
