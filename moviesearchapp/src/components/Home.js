import React from 'react';
import Movies from './Movies';
import Search from './Search';

const Home = () => {
  
  return (
    <div>
      <h1 contenteditable spellcheck="false">MOVIE SEARCH APP</h1>
      <Search/>
      <Movies/>
    </div>
  );
};

export default Home;
