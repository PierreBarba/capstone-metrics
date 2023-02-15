import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Specification from './Pages/Specification';

const App = () => (

  <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Specification/:name" element={<Specification />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  </>
);

export default App;
