import React from 'react';
import './App.css';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import SingleMovie from './components/SingleMovie';
import Error from './components/Error';

const App = () => {
  return (  
    <>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movie/:id" element={<SingleMovie />} />
          <Route path="#" element={<Error/>}/>
        </Routes>
      
    </>
  );
}

export default App;
