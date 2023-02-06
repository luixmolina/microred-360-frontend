
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ContentApp from './components/ContentApp';
import Footer from './components/Footer';
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 


function App() {
  return (
    <>
    <Router>
     <Navbar />

    <Routes>
      <Route path="/" exact element={<ContentApp/>}/>
    </Routes>
     </Router>
     <Footer />
     </>
  );
}

export default App;
