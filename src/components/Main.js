import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Navbar from './Navbar';

const Main = () => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/about' element={<About />}></Route>
        <Route exact path='/projects' element={<Projects />}></Route>
      </Routes>
    </div>

  );
}

export default Main;