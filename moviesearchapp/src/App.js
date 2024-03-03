import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import SingleMovie from './components/SingleMovie';
import Error from './components/Error';
import { AppProvider } from './context';
import Movies from './components/Movies';
import Search from './components/Search';

const App = () => {
  return (
    <AppProvider>
      
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<SingleMovie />} />
          <Route path="#" element={<Error />} />
        </Routes>
        <Movies />
      
    </AppProvider>
  );
};

export default App;
