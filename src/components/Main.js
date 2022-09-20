import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Blog from './Blog';
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
        <Route exact path='/mind-palace' element={<Blog />}></Route>
      </Routes>
    </div>

  );
}

export default Main;