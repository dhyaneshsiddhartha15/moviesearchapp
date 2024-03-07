import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import SingleMovie from './components/SingleMovie';

import { AppProvider } from './context';


const App = () => {
  return (
    <AppProvider>
      
        
        <Routes>
        
      
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<SingleMovie />} />
          
        </Routes>
        
    </AppProvider>
  );
};

export default App;
