import { Routes, Route } from "react-router-dom";
import React from 'react';
import Menu from './Menu';
import Home from './components/Home';
import About from './components/about';
import './App.css';

function App() {
  return (
    <>
    <Menu/>
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path="about" element={<About/>}/>
      </Routes>
    </>
  );
}

export default App;
